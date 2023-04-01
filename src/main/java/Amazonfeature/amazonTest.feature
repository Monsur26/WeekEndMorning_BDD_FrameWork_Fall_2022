Feature: This is an example of automated test cases with Amazon

  Scenario: Language Hover and select
    Given I am in amazon homepage
    When I hover over the EN menu for English language
    And I click ES radio button for change language to spanish
    And I hover over to ES menu for Spanish Language
    Then I click to EN radio button and language changes to English
