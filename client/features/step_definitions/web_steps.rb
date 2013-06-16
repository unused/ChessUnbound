
Given(/^in game list the game "([^"]*)" is "([^"]*)"$/) do |name, status|
  @game = Game.create(name: name, status: status)
end

When(/^I am in the game with FEN "(.*?)"$/) do |fen|
  @fen = fen
end

When(/^I am on the "([^"]*)" screen$/) do |path|
  path = '' if path == APP_HOME_NAME
  visit path
  sleep(1)
end

When(/^I press the "([^"]*)" button$/) do |button|
  page.find("span", :text => Regexp.new(button)).click
end

When(/^I tap the "([^"]*)" game in the list$/) do |game|
  sleep(1)
  page.find("div.list-item-title.game", :text => Regexp.new(game)).click
end

When(/^I write "([^"]*)" in the "([^"]*)" field$/) do |text,field|
  page.fill_in(field, :with => text)
end

When(/^the opponent wants to play$/) do
  @game.update(status: 'playing')
end

Then(/^I should be on the "([^"]*)" screen$/) do |route|
  item_regexp = /ext-#{route.downcase}-\d+/
  target = page.evaluate_script('Ext.Viewport.getActiveItem().getId()');
  assert_match item_regexp, target
end

Then(/^I should( not)? see "([^"]*)" in the game list$/) do |negate, game|
  found_game = false
  all('div.game').each { |g| found_game = true if g.has_content(game) }
  assert (!!(negate) ^ found_game)
end

Then(/^I should see "([^"]*)" in the game list read "([^"]*)"$/) do |game, status|
  sleep(1)
  page.find('div.game').has_content?("#{game} - #{status}")
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end

# TODO merge with above
Then(/^I should not read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_no_content?(content)
end

