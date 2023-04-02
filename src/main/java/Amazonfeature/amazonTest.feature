Feature: This is an example of automated test cases with Amazon
  Background:  I am in amazon homepage

    @3
  Scenario: Language Hover and select
   // Given I am in amazon homepage
    When I hover over the EN menu for English language
    And I click ES radio button for change language to spanish
    And I hover over to ES menu for Spanish Language
    Then I click to EN radio button and language changes to English

    @2
    Scenario: Searching Product
     // Given I am in amazon homepage
      When I search for a product in the search bar
      And I press enter  on the search bar
      Then I see the search results

      @1
      Scenario Outline: searching product with Example
        When I serach for "<product>" in the search bar
        And I press enter  on the search bar
        Then I see the search results

        Examples:
          |product|
          | Chair |
          | Table |
          | Mug   |

