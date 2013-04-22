Feature: game storage
  As a registered user
  I want to manage my games
  So I request the api

  Scenario: creating a new game session
    When I send a POST request to "/game" with the followin values
      | host    | player |
      | philipp | markus |
    Then the response status should be 200

  Scenario: retrieving list of games
    Given the following list of games
      | host    | player    |
      | philipp | markus    |
      | philipp | christoph |
      | markus  | christoph |
    When I send a GET request to /games/philipp
    Then the response status should be 200
      And the body should contain markus
      And the body should contain christoph

