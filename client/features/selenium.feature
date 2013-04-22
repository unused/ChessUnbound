Feature: testing selenium
  In order to develop behaviour driven
  As a brave student
  I want to make execute some fancy tests

  Scenario: open a webpage
    When I visit the "/ChessToGo" page
    Then I should read "General Information" within "readme"
