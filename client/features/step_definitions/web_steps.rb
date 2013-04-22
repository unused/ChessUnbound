require 'capybara/dsl'

include Capybara::DSL

require 'selenium-webdriver'

Capybara.default_driver = :selenium
Capybara.app_host = 'https://www.github.com/unused'

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
  pending # express the regexp above with the code you wish you had
end

When(/^I press the "([^"]*)" button$/) do |button|
  pending # express the regexp above with the code you wish you had
end

When(/^I write "(.*?)" game in the name field$/) do |name|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see move (not)?\s?allowed$/) do |negative|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should be on the "([^"]*)" screen$/) do |page|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see game "(.*?)" in the game list$/) do |name|
  pending # express the regexp above with the code you wish you had
end

Then(/^game "(.*?)" should read waiting$/) do |name|
  pending # express the regexp above with the code you wish you had
end

When(/^I visit the "(.*?)" page$/) do |page|
  visit(page)
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end
