package amazonRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/main/java/Amazonfeature"},
        glue = "AmazonstepDefinition",
        // plugin = {"pretty","json:target/cucumber-reports/cucumber.json","html:target/cucumber-reports"},
        plugin= {"pretty","html:test-output", "html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"},
        strict =true ,
        monochrome =true ,
        dryRun = false,
        tags = "(@1 or @2) and (not @3)"
        //tags=""

)

public class AmazonTestRunner {
}
