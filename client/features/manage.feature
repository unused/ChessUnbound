Feature: manage games
  In order to play chess
  As a chess player
  I want to manage my games

	Scenario: create game
		When I am on the "GamesListContainer" screen
      And I press the "New Game" button
		Then I should be on the "GameEditor" screen
      And I write "Muhkuh" in the "name" field
      And I press the "Create" button
    Then I should be on the "GamesListContainer" screen
      And I should see "Muhkuh" in the game list read "waiting"

  Scenario: abort game creation
    When I am on the "GamesListContainer" screen
      And I press the "New Game" button
    Then I should be on the "GameEditor" screen
      And I write "Muhkuh" in the "name" field
      And I press the "Back" button
    Then I should be on the "GamesListContainer" screen
      And I should not see "Muhkuh" in the game list

	Scenario: join game
    Given a waiting game
    When I am on the "GamesListContainer" screen
      And I press the "Join a Game" button
		Then I should be on the "JoinGamesListContainer" screen
    When I tap the "waiting game" game in the list
      Then I should be on the "GamesListContainer" screen
      And I should see "waiting game" in the game list

