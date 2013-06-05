# require the server libraries
require File.expand_path("../../../server/app.rb",File.dirname(__FILE__))

# Clear Database
Game.delete_all
User.delete_all
