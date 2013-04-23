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
		Then there is a info 'Game started'

	Scenario: user joins game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'waiting'
		And I press 'Join' button on the 'MuhKuh' game
		Then I should be on the 'Board' screen
		And I press 'Play' button
		Then the game should have started

	Scenario: user can't join game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'playing'
		Then there is not a 'Join' button

	Scenario: user watchs game
		When I am on the 'Home' screen
		And in 'Games' list the game 'MuhKuh' is 'playing'
		And I press 'Watch' button
		Then I should be on the 'Board' screen
		And I should be watching

	Scenario: user moves a piece
		Given a running game
		And it is my turn
		And I move a piece correctly
		Then the board should be updated
		And it is not my turn

	Scenario: user forfeits
		Given a running game
		And is is my turn
		And I press 'Forfeit' button
		And the game ends with lost

	Scenario: user wants remis
		Given a running game
		And is is my turn
		And I press 'Remis' button
		Then there is a info 'Waiting'
		And it is not my turn

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
		Then it is my opponents turn

	Scenario: user wins
		Given a running game
		When he is matt
		Then the game ends with won
		
	Scenario: user lost
		Given a running game
		When he is matt
		Then the game ends with lost