
require 'sinatra'
set :root, File.dirname(__FILE__)
require 'mongoid'

Mongoid.load! File.join(settings.root, 'config', 'mongoid.yml')

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

before do
  content_type 'application/json'
end

# create new guest user
#   no params
# response: generated username
post '/user' do
  user = User.generate
  user.to_json
end

# create new guest user
#   authentication!
#   :new_username, String
# response: username
put '/user' do
  protect!
  user = authorized_user
  user.username = params[:new_username]
  {username: params[user.save ? :new_username : :username]}.to_json
end

# get a list of games
#   authentication!
get '/games' do
  protect!
  games = Game.find_by_username(params[:username])
  games.to_json
end

# create a new game
#   authentication!
post '/game' do
  protect!
  game = {}
  rand_color = [true,false].sample ? :black : :white
  game[rand_color] = authorized_user.username
  Game.create(game).to_json
end


