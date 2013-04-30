Feature: game management

  @clean_database
  Scenario: list games
    Given the following list of games:
      | black     | white      |
      | Philipp   | Markus     |
      | Markus    | Christoph  |
      | Christoph | Philipp    |
      | Philipp   | Guest89715 |
      And I am registered user "Philipp" with key "RxfSCE5QtDZFkuO0VeEMyfyc"
    When I send a GET request to "/games" with the following:
      | username | Philipp                  |
      | key      | RxfSCE5QtDZFkuO0VeEMyfyc |
    Then the response status should be 200
      And the response should have the following data:
      | black     | white      |
      | Philipp   | Markus     |
      | Christoph | Philipp    |
      | Philipp   | Guest89715 |

  Scenario: create new game
    Given I am authenticated as "Jürgen"
    When I send a POST request to "/game"
    Then the response status should be 200
      And the response should have "_id"

  Scenario: join waiting game
    Given I am authenticated as "Philipp"
      And there is a game with id "test_game_id" waiting
    When I send a POST request to "/game/join" with the following:
      | id | "test_game_id" |
    Then the response status should be 200

