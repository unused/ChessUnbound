Feature: game management

  Scenario: list games
    Given the following list of games:
      | black     | white      |
      | Philipp   | Markus     |
      | Markus    | Christoph  |
      | Christoph | Philipp    |
      | Philipp   | Guest89715 |
      And I am registered user "Philipp" with key "RxfSCE5QtDZFkuO0VeEMyfyc"
    When I send a GET request to "/games" with the following:
      | username | Philipp |
      | key      | RxfSCE5QtDZFkuO0VeEMyfyc |
    Then the response status should be 200
      And the response should have the following data:
       | black     | white      |
       | Philipp   | Markus     |
       | Christoph | Philipp    |
       | Philipp   | Guest89715 |



