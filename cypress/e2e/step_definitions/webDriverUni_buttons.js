import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Buttons from "../../support/POM/buttons_page";
import Index from "../../support/POM/index_page";

let index = new Index();
let buttons= new Buttons();

Given("Launch the Webdriver_Uni baseUrl and the landing page tilte should be {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
    })

When("user clicks on the BUTTON CLICKS link and validate the url of the page conatins {string}",(siteParam)=>{
index.buttonLink().invoke("removeAttr","target").click();
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
cy.url().then(expurl=>{
    expect(expurl).contains(siteParam);
})
})

Then("click on the button1",()=>{
    buttons.button1().click();
})

Then("validate the prompt msg and close the button1 prompt",()=>{
    buttons.button1PromptMsg().should("contain","Well done for successfully")
    buttons.button1PromptCloseBtn().click();
})

Then("click on the button2 by triggering click method",()=>{
    buttons.button2().trigger("click");
})

Then("validate the prompt msg and close the button2 prompt",()=>{
    buttons.button2PromptMsg().should("contain","We can use JavaScript code");
    buttons.button2PromptCloseBtn().click();
})

Then("click on the button3 by mouse movement",()=>{
    buttons.button3().invoke("mousemove").click();
})

Then("validate the prompt msg and close the button3 prompt",()=>{
    buttons.button3PromptMsg().should("contain","Advanced user interactions");
    buttons.button3PromptCloseBtn().click();
})
