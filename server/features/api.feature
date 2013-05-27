Feature: communicating with the api
  As a user
  I want to use the api
  So I send a request

  Scenario: 404 not found
    When I send a GET request to "/notfoundpath"
    Then the response status should be 404

  Scenario: responds with callback
    When I send a GET request to "/user"
    Then the response body should match "/^my_callback([.]*)$"

