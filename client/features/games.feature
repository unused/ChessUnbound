Feature: game creation
  In order to play chess as a chess player I want to start a new game

	Scenario: user creates new game
		When I am on the 'Home' screen
		And I press 'New Game' button
		Then I should be on the 'GameEditor' screen
		And I write 'Muhkuh' in the name field
		And I press the 'Create Game' button
		Then I should be on the 'home' screen
		And in the 'Games' list the game 'MuhKuh' should be 'waiting'

	Scenario: user joins game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'waiting'
		And I press 'Join' button on the 'MuhKuh' game
		Then I should be on the 'Board' screen
		And I press 'Play' button
		And opponent wants to play
		Then the game should have started

	Scenario: user can't join game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'playing'
		Then there is no 'Join' button

	Scenario: user watchs game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'playing'
		And I press 'Watch' button
		Then I should be on the 'Board' screen
		And I should be watching

	Scenario: white me moves a piece
		Given a running game
		And I am white
		And it is white turn 
		And I move a piece correctly
		Then the board should be updated
		And it is black turn

	Scenario: black me moves a piece
		Given a running game
		And I am black
		And it is black turn 
		And I move a piece correctly
		Then the board should be updated
		And it is white turn

	Scenario: white opponent moves a piece
		Given a running game
		And I am black
		And it is white turn 
		Then I need to wait for black
		
	Scenario: black opponent moves a piece
		Given a running game
		And I am white
		And it is black turn 
		Then I need to wait for black

	Scenario: white me forfeits
		Given a running game
		And I am white
		And it is white turn
		And I press 'Forfeit' button
		And the game ends with white wins

	Scenario: black me forfeits
		Given a running game
		And I am black
		And it is black turn
		And I press 'Forfeit' button
		And the game ends with black wins

	Scenario: white me wants remis
		Given a running game
		And I am white
		And it is white turn
		And I press 'Remis' button
		Then I need to wait for black
		
	Scenario: black me wants remis
		Given a running game
		And I am black
		And it is black turn
		And I press 'Remis' button
		Then I need to wait for white

	Scenario: user accepts remis
		Given a running game
		When there is a remie request
		And it is my turn
		And I press 'Accept' button
		And the game ends with remie

	Scenario: user declines remis
		Given a running game
		When there is a remie request
		And it is my turn
		And I press 'Decline' button
		Then the game continues
		And it is not my turn

	Scenario: user wins
		Given a running game
		When opponent is check-matt
		Then the game ends with I won
		
	Scenario: user lost
		Given a running game
		When opponent is matt
		Then the game ends with I lost
		
	Scenario: opponent time ran out
		Given a running game
		When time ran out
		And it is opponent turn
		Then the game ends with I win
		
	Scenario: my time ran out
		Given a running game
		When time ran out
		And it is my turn
		Then the game ends with I lost