
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

When(/^I am on the "([^"]*)" screen$/) do |route|
  route = '' if route == APP_HOME_NAME
  visit("/#{route}")
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

Then(/^I should be on the "([^"]*)" screen$/) do |route|
  route = (route == APP_HOME_NAME) ? "" : "##{route}"
  assert_equal current_url, "#{current_host}/#{route}"
end

Then(/^I should see "([^"]*)" in the game list$/) do |name|
  page.find('ul#game-list li').has_content?(name)
end

Then(/^I should see "([^"]*)" in the game list read "([^"]*)"$/) do |name, status|
  page.find('ul#game-list li').has_content?("#{name} - #{status}")
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end

