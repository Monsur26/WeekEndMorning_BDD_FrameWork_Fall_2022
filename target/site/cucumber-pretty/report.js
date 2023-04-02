$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Amazonfeature/amazonTest.feature");
formatter.feature({
  "name": "This is an example of automated test cases with Amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "I am in amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching Product",
  "description": "     // Given I am in amazon homepage",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2"
    }
  ]
});
formatter.step({
  "name": "I search for a product in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_search_for_a_product_in_the_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter  on the search bar",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_press_enter_on_the_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_see_the_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "searching product with Example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@1"
    }
  ]
});
formatter.step({
  "name": "I serach for \"\u003cproduct\u003e\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "name": "I press enter  on the search bar",
  "keyword": "And "
});
formatter.step({
  "name": "I see the search results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "Chair"
      ]
    },
    {
      "cells": [
        "Table"
      ]
    },
    {
      "cells": [
        "Mug"
      ]
    }
  ]
});
formatter.background({
  "name": "I am in amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "searching product with Example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@1"
    }
  ]
});
formatter.step({
  "name": "I serach for \"Chair\" in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_serach_for_in_the_search_bar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press enter  on the search bar",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_press_enter_on_the_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonstepDefinition.StepDefinition.i_see_the_search_results()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(text(),\u00271-16 of over 1,000 results for\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u002710.11.64.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat Amazonhomepage.Homepage.searchResultAssertion(Homepage.java:31)\r\n\tat AmazonstepDefinition.StepDefinition.i_see_the_search_results(StepDefinition.java:74)\r\n\tat ✽.I see the search results(file:///C:/BDD_Framework_TEAM_A_B_C_FALL_2022/src/main/java/Amazonfeature/amazonTest.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am in amazon homepage",
  "description": "",
  "keyword": "Background"
});
