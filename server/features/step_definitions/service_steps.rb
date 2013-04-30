require 'jsonpath'

# Service steps
When /^I send a (GET|POST|PUT|DELETE) request to "([^"]*)"(?: with the following:)?$/ do |*args|

  options = {
    params: {},
    method: args.shift.downcase.to_sym
  }

  path = args.shift
  input = args.shift

  unless input.nil?
    if input.class == Cucumber::Ast::Table
      options[:params] = input.rows_hash
    else
      options[:input] = input
    end
  end

  unless @user.nil?
    options[:params].merge!({
      username: @user.username,
      key: @user.key
    })
  end

  request path, options
end

Then /^the response status should be (\d+)$/ do |status|
  assert_equal status.to_i, last_response.status
end

Then /^the response should have "([^"]*)"$/ do |json_path|
  json = JSON.parse(last_response.body)
  results = JsonPath.new(json_path).on(json).to_a.map(&:to_s)
  assert !results.empty?, "JSON data does not contain #{json_path}"
end

Then /^the response should have "([^"]*)" with "([^"]*)"$/ do |json_path, text|
  json = JSON.parse(last_response.body)
  results = JsonPath.new(json_path).on(json).to_a.map(&:to_s)
  assert results.include?(text)
end

Then /^the response should have the following data:$/  do |response|
  json_data = JSON.parse(last_response.body)
  response.hashes.each do |row|
    found = false
    json_data.each do |data|
      data.select! { |k,v| row.keys.include? k }
      found = true if data.sort == row.sort
    end
    assert found, "response #{json_data} did not have data: #{row}"
  end
end

