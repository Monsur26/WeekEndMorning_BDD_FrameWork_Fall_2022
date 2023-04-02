package Amazonhomepage;


import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static AmazonWebElementsHomePage.WebElements.*;

public class Homepage extends WebAPI {

    //Getting all the WebElemnts Ready
    @FindBy (how = How.XPATH, using = ENMousehoverXpath) public WebElement ENMouseHover;
    @FindBy(how = How.XPATH, using = ESMouseHoverXpath ) public WebElement ESMouseHover;
    @FindBy(how = How.XPATH, using = ENRadioButtonXpath ) public WebElement ENRadioButton;
    @FindBy(how = How.XPATH, using = ESRadioButtonXpath ) public WebElement ESRadioButton;
    @FindBy(css = amazonSearchBarCSS) public WebElement amazonSearchBarLocator;
    @FindBy(xpath = amazonSearchBaResultMessagerXPath) public WebElement searchResultValidation;
    // This is the same thing as WebElement element=driver.findElement(By.CSS(""));

    //All the steps associated with diffferent test cases
     public void languageENHover(){mouseHoverByXpath(ENMousehoverXpath);}
     public void ESRadioButtonClick(){ESRadioButton.click();}
     public void languageESHover(){mouseHoverByXpath(ESMouseHoverXpath);}
     public void ENRadioButtonClick(){ENRadioButton.click();}
     public void enterProductNameonSearchBar(String productName){amazonSearchBarLocator.sendKeys(productName);}
     public void submitForSearchResult(){amazonSearchBarLocator.submit();}
     public void searchResultAssertion(String expected){
         String actual=searchResultValidation.getText();
         Assert.assertEquals("Assertion Failed",expected,actual);
     }

}
