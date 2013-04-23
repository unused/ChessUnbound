Feature: playing chess
  As a user
  I want to make a move
  So I request the api

  Scenario: valid move
    Given the game "gameid"
    When I send a POST request to "/game/gameid"
      And I send a valid move
    Then the response status should be 200
      And the body should contain "valid"

  Scenario: invalid move
    Given the game "gameid"
    When I send a POST request to "/game/gameid"
      And I send a invalid move
    Then the response status should be 200
      And the body should contain "invalid"

