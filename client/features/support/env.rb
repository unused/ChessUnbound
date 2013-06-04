# require 'capybara/dsl'
#
# include Capybara::DSL

require 'capybara/cucumber'
require 'selenium-webdriver'


Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(app, :browser => :chrome)
end
Capybara.default_driver = :selenium
Capybara.run_server = false

APP_HOME_NAME = 'GamesListContainer'
Capybara.app_host = 'http://chessunbound.dev/app.html'

require File.expand_path("../server.rb", __FILE__)
