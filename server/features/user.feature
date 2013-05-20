Feature: user management

  Scenario: create user
    When I send a GET request to "/user"
    Then the response should have "username"
      And the response should have "key"

  @clean_database
  Scenario: set username
    Given I am registered user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9"
    When I send a GET request to "/user" with the following:
       | username | Guest89715 |
       | key | cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9 |
       | new_username | Philipp |
    Then the response status should be 200
      And the user "Philipp" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" exists
      And the user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" does not exist
      And the response should have "username" with "Philipp"

  @clean_database
  Scenario: set username
    Given I am registered user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9"
      And I am registered user "Philipp" with key "792c37323fcd9502de89b328f4c0a472c6f001878875547bd0eb"
    When I send a GET request to "/user" with the following:
       | username | Guest89715 |
       | key | cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9 |
       | new_username | Philipp |
    Then the response status should be 200
      And the user "Philipp" with key "792c37323fcd9502de89b328f4c0a472c6f001878875547bd0eb" exists
      And the user "Philipp" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" does not exist
      And the user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" exists
      And the response should have "username" with "Guest89715"

  Scenario: you shall not pass
    When I send a GET request to "/game"
    Then the response status should be 401

