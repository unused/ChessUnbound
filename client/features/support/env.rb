require 'capybara/dsl'

include Capybara::DSL

require 'selenium-webdriver'

Capybara.default_driver = :selenium
Capybara.app_host = 'http://chessunbound.dev/app.html'
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

APP_HOME_NAME = 'Home'
