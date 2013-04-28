Feature: playing chess
  In order to play chess
  As a chess player
  I want to start a new game

	Scenario: white me moves a piece
		Given a running game
      And I am white
    When it is white turn
      And I move a piece correctly
		Then the board should be updated
      And it is black turn

  Scenario: black me moves a piece
    Given a running game
      And I am black
    When it is black turn
      And I move a piece correctly
    Then the board should be updated
      And it is white turn

  Scenario: white opponent moves a piece
    Given a running game
      And I am black
    When it is white turn
    Then I need to wait for black

  Scenario: black opponent moves a piece
    Given a running game
      And I am white
    When it is black turn
    Then I need to wait for black

  Scenario: white me forfeits
    Given a running game
      And I am white
    When it is white turn
      And I press the "Forfeit" button
    Then the game ends with white wins

  Scenario: black me forfeits
    Given a running game
      And I am black
    When it is black turn
      And I press the "Forfeit" button
    Then the game ends with black wins

  Scenario: white me wants remis
    Given a running game
      And I am white
    When it is white turn
      And I press the "Remis" button
    Then I need to wait for black

  Scenario: black me wants remis
    Given a running game
      And I am black
    When it is black turn
      But I press the "Remis" button
    Then I need to wait for white

  Scenario: user accepts remis
    Given a running game
    When there is a remis request
      And it is my turn
      And I press the "Accept" button
    Then the game ends with remis

  Scenario: user declines remis
    Given a running game
    When there is a remis request
      And it is my turn
      And I press the "Decline" button
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

