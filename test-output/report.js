$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Amazonfeature/amazonTest.feature");
formatter.feature({
  "name": "This is an example of automated test cases with Amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Language Hover and select",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_am_in_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over the EN menu for English language",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_hover_over_the_EN_menu_for_English_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click ES radio button for change language to spanish",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_click_ES_radio_button_for_change_language_to_spanish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over to ES menu for Spanish Language",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_hover_over_to_ES_menu_for_Spanish_Language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click to EN radio button and language changes to English",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_click_to_EN_radio_button_and_language_changes_to_English()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});