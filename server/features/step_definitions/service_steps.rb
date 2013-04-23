
require 'jsonpath'

if defined?(Rack)

  # Monkey patch Rack::MockResponse to work properly with response debugging
  class Rack::MockResponse
    def to_str
      body
    end
  end

  World(Rack::Test::Methods)

end

When /^I send a (GET|POST|PUT|DELETE) request to "([^"]*)"(?: with the following:)?$/ do |*args|
  request_type = args.shift
  path = args.shift
  input = args.shift

  request_opts[:method] = request_type.downcase.to_sym

  unless input.nil?
    if input.class == Cucumber::Ast::Table
      request_opts[:params] = input.rows_hash
    else
      request_opts[:input] = input
    end
  end

  request path, request_opts
end

Then /^the response status should be "([^"]*)"$/ do |status|
  assert_equal status.to_i, last_response.status
end


Then /^the response should have "([^"]*)" with "([^"]*)"$/ do |json_path, text|
  json = JSON.parse(last_response.body)
  results = JsonPath.new(json_path).on(json).to_a.map(&:to_s)
  assert results.include?(text)
end

