Feature: user management

  Scenario: create user
    When I send a POST request to "/user"
    Then the response should have "username"
      And the response should have "key"

  Scenario: set username
    Given I am registered user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9"
    When I send a PUT request to "/user" with the following:
       | username | Guest89715 |
       | key | cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9 |
       | new_username | Philipp |
    Then the response status should be 200
      And the user "Philipp" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" exists
      And the user "Guest89715" with key "cd3718b167c2462bf86d16d9246c02dc06ae8cb8e6d6a03966c9" does not exist

