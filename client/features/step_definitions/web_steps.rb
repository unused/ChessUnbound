require 'capybara/dsl'

include Capybara::DSL

require 'selenium-webdriver'

Capybara.default_driver = :selenium
Capybara.app_host = 'http://chesstogo.dev'
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Given(/^Someone started the game "(.*?)"$/) do |name|
  pending # express the regexp above with the code you wish you had
end

When(/^I am in the game with FEN "(.*?)"$/) do |fen|
  @fen = fen
end

When(/^I move (\w\d) to (\w\d)$/) do |position, move|
  pending # express the regexp above with the code you wish you had
end

When(/^I choose the game "(.*?)"$/) do |name|
  pending # express the regexp above with the code you wish you had
end

When(/^I am on the "([^"]*)" screen$/) do |page|
  page = '/app.html' if page == 'home'
  visit(page)
end

When(/^I press the "([^"]*)" button$/) do |button|
  page.find("span", :text => Regexp.new(button)).click
end

When(/^I write "([^"]*)" in the "([^"]*)" field$/) do |text,field|
  page.fill_in(field, :with => text)
end

Then(/^I should see move (not)?\s?allowed$/) do |negative|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should be on the "([^"]*)" screen$/) do |page|
  page = '/app.html' if page == 'home'
  assert_equal current_path, page
end

Then(/^I should see game "(.*?)" in the game list$/) do |name|
  page.find('#game-list').have_content?(name)
end

Then(/^the game "([^"]*)" should read "([^"]*)"$/) do |game,text|
  page.find('#game-list li').have_content?(name)
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end

