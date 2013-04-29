Feature: user management

  Scenario: create user
    When I send a POST request to "/user"
      Then the response should have "username" and "key"

  Scenario: set username
    Given I am registered user "Guest89715" with key "uO0VeEMyfycRxfSCE5QtDZFk"
    When I send a PUT request to "/user" with the following:
       | username | Guest89715 |
       | key | uO0VeEMyfycRxfSCE5QtDZFk |
       | new_username | Philipp |
    Then the response status should be 200
      And the user "Philipp" with key "uO0VeEMyfycRxfSCE5QtDZFk" exists
      And the user "Guest89715" with key "uO0VeEMyfycRxfSCE5QtDZFk" does not exist

