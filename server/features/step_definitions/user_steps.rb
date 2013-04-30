
Given /^I am registered user "(.*?)" with key "(.*?)"$/  do |username, key|
  User.create(username: username, key: key)
end

Given /^I am authenticated as "([^"]*)"$/ do |username|
  @user = User.create(username: username, key: User.generate_key)
end

Then /^the user "(.*?)" with key "(.*?)"( does not)? exists?$/  do |username, key, negate|
  assert (!!negate) ^ User.find_by(username: username, key: key)
end


