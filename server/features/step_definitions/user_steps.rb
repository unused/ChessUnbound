
Given /^I am registered user "(.*?)" with key "(.*?)"$/  do |username, key|
  User.create(username: username, key: key)
end

Then /^the user "(.*?)" with key "(.*?)"( does not)? exists?$/  do |username, key, negate|
  assert (!!negate) ^ User.find_by(username: username, key: key)
end

