Feature: manage games
  In order to play chess
  As a chess player
  I want to manage my games

	Scenario: create game
		When I am on the "Home" screen
      And I press the "New Game" button
		Then I should be on the "GameEditor" screen
      And I write "Muhkuh" in the "name" field
      And I press the "Create Game" button
    Then I should be on the "Home" screen
      And I should see "Muhkuh" in the game list read "waiting"

	Scenario: join game
    Given in "games" list the game "MuhKuh" is "waiting"
		When I am on the "Home" screen
      And I press the "Join" button on the "MuhKuh" game
		Then I should be on the "Board" screen
    When I press the "Play" button
      And the opponent wants to play
		Then the game should have started

	Scenario: declined join game
    Given in "games" list the game "MuhKuh" is "playing"
		When I am on the "Home" screen
		Then there is no "Join" button

	Scenario: watch game
    Given in "Games" list the game "MuhKuh" is "playing"
		When I am on the "Home" screen
      And I press the "Watch" button
		Then I should be on the "Board" screen
      And I should be watching

