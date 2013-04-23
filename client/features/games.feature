Feature: game creation
  In order to play chess as a chess player I want to start a new game

  Scenario: user creates a new game
    When I am on the "home" screen
      And I press the "New Game" button
      And I write "test game" in the "name" field
      And I press the "short game" button
    Then I should be on the "home" screen
      And I should see game "test" in the game list
      And the game "test" should read "waiting"

  Scenario: user can see a list of open games
    Given Someone started the game "another game"
    When I am on the "home" screen
      And I press the "connect to game" button
    Then I should see game "another game" in the game list

  Scenario: User can connect to an open game
    Given Someone started the game "join me"
    When I am on the "home" screen
      And I press the "connect to game" button
      And I choose the game "join me"
    Then I should be on the "home" screen
      And I should see game "join me" in the game list

