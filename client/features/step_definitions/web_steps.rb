
Given(/^in game list the game "([^"]*)" is "([^"]*)"$/) do |game, status|
  # TODO test-server: create game name status
  # @game = Server.stub(Game.create(game: game, status: status))
end

When(/^I am in the game with FEN "(.*?)"$/) do |fen|
  @fen = fen
end

When(/^I am on the "([^"]*)" screen$/) do |route|
  route = '' if route == APP_HOME_NAME
  visit("#{route}")
end

When(/^I press the "([^"]*)" button$/) do |button|
  page.find("span", :text => Regexp.new(button)).click
end

When(/^I press the "([^"]*)" button on the "([^"]*)" game$/) do |button, game|
  page.find("span", :text => Regexp.new(button)).click
end

When(/^I write "([^"]*)" in the "([^"]*)" field$/) do |text,field|
  page.fill_in(field, :with => text)
end

When(/^the opponent wants to play$/) do
  # TODO server: start the game
  # @game.update(status: 'playing')
end

Then(/^I should be on the "([^"]*)" screen$/) do |route|
  # route = (route == APP_HOME_NAME) ? "" : "##{route}"
  # assert_equal current_url, "#{current_host}#{route}"
  item_id = "ext-#{route.downcase}-1"
  result = page.evaluate_script('Ext.Viewport.getActiveItem().getId()');
  assert_equal item_id, result
end

Then(/^I should( not)? see "([^"]*)" in the game list$/) do |negate, game|
  found_game = false
  all('div.game').each { |g| found_game = true if g.has_content(game) }
  assert (!!(negate) ^ found_game)
end

# TODO merge with above
Then(/^I should see "([^"]*)" in the game list read "([^"]*)"$/) do |game, status|
  page.find('div.game').has_content?("#{game} - #{status}")
end

Then(/^I should read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_content?(content)
end

# TODO merge with above
Then(/^I should not read "(.*?)" within "(.*?)"$/) do |content, selector|
  page.find("##{selector}").has_no_content?(content)
end

