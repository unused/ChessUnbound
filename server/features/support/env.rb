ENV['RACK_ENV'] = 'test'

app_file = File.join(File.dirname(__FILE__), *%w[.. .. app.rb])
require app_file

Sinatra::Application.app_file = app_file

require 'minitest/unit'
require 'rack/test'
require 'webrat'
require 'cucumber'
require 'capybara'
require 'capybara/cucumber'

Capybara.app = Sinatra::Application

Webrat.configure do |config|
  config.mode = :rack
end

class ChessWorld
  include Rack::Test::Methods
  include Webrat::Methods
  include Webrat::Matchers
  include Capybara::DSL

  include MiniTest::Assertions

  Webrat::Methods.delegate_to_session :response_code, :response_body

  def app
    Sinatra::Application
  end
end

World{ChessWorld.new}

