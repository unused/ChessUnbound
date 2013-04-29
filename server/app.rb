
require 'sinatra'
set :root, File.dirname(__FILE__)
require 'mongoid'

Mongoid.load! File.join(settings.root, 'config', 'mongoid.yml')

%w(game user).each do |model|
  require File.join(settings.root, "app/models/#{model}.rb")
end

helpers do
  def protect!
    return if authorized?
    headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
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
post '/user' do
  user = User.generate
  user.to_json
end

put '/user' do
  protect!
  authorized_user.update_attribute(:username, params[:new_username])
end

get '/games' do
  games = Game.where(
    '$or' => [{ black: params[:username] }, { white: params[:username] }])
  games.to_json
end

