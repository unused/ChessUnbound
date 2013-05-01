Feature: playing chess
  As a user
  I want to make a move
  So I request the api

  @clean_database
  Scenario: valid move
    Given the game "gameid"
      And I am authenticated as "Harald"
    When I send a POST request to "/move/gameid/f3f6"
    Then the response status should be 200
      And the response should have "valid" with "true"
      And the response should have "fen"

  @clean_database
  Scenario: invalid move
    Given the game "gameid"
      And I am authenticated as "Harald"
    When I send a POST request to "/move/gameid/f3f8"
    Then the response status should be 200
      And the response should have "valid" with "false"
      And the response should have "fen"

