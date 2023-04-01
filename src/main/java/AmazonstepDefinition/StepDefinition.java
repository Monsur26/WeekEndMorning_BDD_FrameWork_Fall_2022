package AmazonstepDefinition;

import Amazonhomepage.Homepage;
import common.WebAPI;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.*;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(  false,
                "browserstack",
                "windows", "10",
                "chrome",
                "111",
                "https://www.amazon.com/");

    }
    @After
    public void closeBrowser(){
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am in amazon homepage")
    public void i_am_in_amazon_homepage() {
        getInitElements();
    }

    @When("I hover over the EN menu for English language")
    public void i_hover_over_the_EN_menu_for_English_language() {
        getInitElements();
        homepage.languageENHover();
    }

    @When("I click ES radio button for change language to spanish")
    public void i_click_ES_radio_button_for_change_language_to_spanish() {
        getInitElements();
        homepage.ESRadioButtonClick();
    }

    @When("I hover over to ES menu for Spanish Language")
    public void i_hover_over_to_ES_menu_for_Spanish_Language() {
        getInitElements();
        homepage.languageESHover();
    }

    @Then("I click to EN radio button and language changes to English")
    public void i_click_to_EN_radio_button_and_language_changes_to_English() {
        getInitElements();
        homepage.ENRadioButtonClick();
    }


}
