Feature: playing chess
  In order to play chess
  As a chess player
  I want to make some fancy moves

  Scenario: Tower does invalid move
    When I am in the game with FEN "asdfasdgasfg"
      And I move E2 to D3
    Then I should see move not allowed

  Scenario: Tower does occupied move
    When I am in the game with FEN "asdfasdgasfg"
      And I move E2 to E3
    Then I should see move not allowed

  Scenario: Tower does blocked move
    When I am in the game with FEN "asdfasdgasfg"
      And I move E2 to E4
    Then I should see move not allowed

  Scenario: Tower does valid move
    When I am in the game with FEN "asdfasdgasfg"
      And I move E2 to E1
    Then I should not see move not allowed
