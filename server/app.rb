
require 'sinatra'
set :root, File.dirname(__FILE__)
require 'mongoid'

Mongoid.load! File.join(settings.root, 'config', 'mongoid.yml')

before do
  content_type 'application/json'
end

post '/user' do
end

