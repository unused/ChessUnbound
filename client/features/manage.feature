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
    Given in game list the game "MuhKuh" is "waiting"
		When I am on the "GamesListContainer" screen
      And I press the "Join a Game" button
		Then I should be on the "JoinGamesListContainer" screen
    When I tap the "Rubinstein" game in the list
      Then I sould be on the "GameBoard" screen

	Scenario: declined join game
    Given in game list the game "MuhKuh" is "waiting"
		When I am on the "GamesListContainer" screen
    Then I should not read "Join" within "game-list"

	Scenario: watch game
    Given in game list the game "MuhKuh" is "waiting"
		When I am on the "GamesListContainer" screen
      And I press the "Watch" button
		Then I should be on the "Board" screen
      Then I should read "watching" within "game-info"

