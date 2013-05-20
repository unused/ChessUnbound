
# OPTIMIZE: move to config file
require 'sinatra'
require 'sinatra/cross_origin'
require 'mongoid'
require 'chess'

set :root, File.dirname(__FILE__)
Mongoid.load! File.join(settings.root, 'config', 'mongoid.yml')

module Sinatra
    register CrossOrigin
end
configure do
  enable :cross_origin
end

%w(game user).each do |model|
  require File.join(settings.root, "app/models/#{model}.rb")
end

helpers do
  # authentication!
  def protect!
    return if authorized?
    halt 401, "Not authorized\n"
  end

  def authorized?
    !! authorized_user
  end

  def authorized_user
    User.find_by(username: params[:username], key: params[:key])
  end
end

set :protection, :except => [:json_csrf]

before do
  content_type 'application/json'
  headers['Access-Control-Allow-Origin'] = '*'
end

# create new guest user or change username
#     no params
#   or
#     authentication!
#     :new_username, String
# response: generated username
get '/user' do
  unless params.has_key? "new_username"
    user = User.generate
    user.to_json
  else
    protect!
    user = authorized_user
    user.username = params[:new_username]
    {username: params[user.save ? :new_username : :username]}.to_json
  end
end

# create a new game
#   authentication!
#   :name, String, optional
# response: created game
get '/game' do
  protect!
  game = {}
  rand_color = [true,false].sample ? :black : :white
  game[rand_color] = authorized_user.username
  game[:name] = params[:name] if params.has_key? :name
  Game.create(game).to_json
end

# get a list of games
#   authentication!
# response: games
get '/games' do
  protect!
  games = Game.find_by_username(params[:username])
  games.to_json
end

# join a waiting game
#   authentication!
# response: success
get '/game/join/:game_id' do
  protect!
  game = Game.find(params[:game_id])
  raise "game is not waiting" unless game.waiting?
  game.add_player authorized_user.username
  game.save
end

# make a move
#   authentication!
# response: valid, status, fen
get '/move/:game_id/:move' do
  protect!
  game = Game.find(params[:game_id])
  raise "game is not playing" unless game.playing?
  # TODO check authenticated is playing the game
  chess = Chess::Game.load_fen game.fen
  valid = begin
      chess.move params[:move]
      true
    rescue Chess::IllegalMoveError
      false
    end
  game.update_attributes(status: 'finished') if chess.over?
  response = {
    valid: valid,
    status: chess.status,
    fen: chess.board.to_fen
  }.to_json
end

not_found do
  content_type 'text/html'
  require 'feedzirra'
  require 'nokogiri'
  feed = Feedzirra::Feed.fetch_and_parse("http://imgur.com/r/funny/rss")
  img_src = Nokogiri::HTML.parse(feed.entries.first.summary).css('img').first['src']
  img = "<img src=\"#{img_src}\" />"
  header = "<h1>404</h1>"
  subheader = "<h2>path not found, showing latest image of imgur.com/r/funny instead</h2>"
  "<html><body style=\"font-size:250%\"><center>#{header}#{subheader}<br/>#{img}</center></body></html>"
end

