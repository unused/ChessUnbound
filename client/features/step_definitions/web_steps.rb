require 'capybara/dsl'

include Capybara::DSL

require 'selenium-webdriver'

Capybara.default_driver = :selenium
Capybara.app_host = 'https://www.github.com/unused'


When(/^I am in the game with FEN "(.*?)"$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I move E(\d+) to D(\d+)$/) do |arg1, arg2|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see move not allowed$/) do
  pending # express the regexp above with the code you wish you had
end

When(/^I move E(\d+) to E(\d+)$/) do |arg1, arg2|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should not see move not allowed$/) do
  pending # express the regexp above with the code you wish you had
end

When(/^I am on the home screen$/) do
  pending # express the regexp above with the code you wish you had
end

When(/^I press the new game button$/) do
  pending # express the regexp above with the code you wish you had
end

When(/^I write "(.*?)" game in the name field$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I press the short game button$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I should be on the home screen$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see game "(.*?)" in the game list$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then(/^game "(.*?)" should read waiting$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Given(/^Someone started the game "(.*?)"$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I am on the "(.*?)" screen$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I press the "(.*?)" button$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see game "(.*?)" in the list$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I choose the game "(.*?)"$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should be on the "(.*?)" screen$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see "(.*?)" in the game list$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

When(/^I visit the "(.*?)" page$/) do |page|
  visit(page)
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end
