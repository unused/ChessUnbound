
require 'sinatra'
set :root, File.dirname(__FILE__)
require 'mongoid'

Mongoid.load! File.join(settings.root, 'config', 'mongoid.yml')

require File.join(settings.root, 'app/models/user.rb')

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

