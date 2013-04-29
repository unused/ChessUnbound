require 'jsonpath'

When /^I send a (GET|POST|PUT|DELETE) request to "([^"]*)"(?: with the following:)?$/ do |*args|
  request_type = args.shift
  path = args.shift
  input = args.shift

  options = {}
  options[:method] = request_type.downcase.to_sym

  unless input.nil?
    if input.class == Cucumber::Ast::Table
      options[:params] = input.rows_hash
    else
      options[:input] = input
    end
  end

  request path, options
end

Then /^the response status should be (\d+)$/ do |status|
  assert_equal status.to_i, last_response.status
end


Then /^the response should have "([^"]*)" with "([^"]*)"$/ do |json_path, text|
  json = JSON.parse(last_response.body)
  results = JsonPath.new(json_path).on(json).to_a.map(&:to_s)
  assert results.include?(text)
end

