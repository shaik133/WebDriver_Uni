import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";
import Alerts from "../../support/POM/popup_alerts_page";

let index= new Index();
let alerts = new Alerts();

Given("Launch WebDriver uni website and validate the title of the page should be {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
})

When("Click on the prompt and alerts link in index page and validate the landing page url includes {string}",(expUrl)=>{
    index.alertsLink().invoke("removeAttr","target").click();
    cy.url().then(Url=>{
        expect(expUrl).contains(expUrl);
    })
})

Then("Click on the Javscript alert and validate the alert msg include {string}",(alertText)=>{
    cy.Alert(alertText);
    alerts.simpleAlertBtn().click();
})

Then("user clicks on modal popup button",()=>{
    alerts.modalPopUpBtn().click();
})
Then("user validate the prompt title msg include {string}",(promptTitle)=>{
    alerts.modalPromptTitle().then((title)=>{
        expect(title.text()).includes(promptTitle)
    })
})

Then("close the prompt",()=>{
    alerts.modalPromptCloseBtn().click();
})

Then("user clicks on the ajax loader button and navigated url must contain {string}",(expUrl)=>{
    alerts.ajaxBtn().click();
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.url().then(actUrl=>{
        expect(actUrl).contains(expUrl);
    })
})

Then("Click on the click me button and it should prompt a msg {string}",(promptTitle)=>{
    alerts.ajaxClickBtn().click(({force:true}),{timeout:6000});
    alerts.ajaxClickPromptTitleMsg().then((title)=>{
        expect(title.text()).contains(promptTitle)
})

Then("user close the prompt by clicking the close btn and navigate back to alerts page",()=>{
 
})

Then("close prompt and navigate back to alert page",()=>{
    alerts.ajaxPromtClosebtn().click();
    cy.go("back");
    cy.url().then((actUrl)=>{
        expect(actUrl).contains("Popup-Alerts")
    })
})


Then("click on the confirm box btn",function(){
cy.ConfirmOkAlert("#button4 p","Press a button!");
})

Then("validate the {string} message is displayed",(confirmOkMsg)=>{
    alerts.confirmMsg().should("include",confirmOkMsg);
})

Then("click on the confirm box btn and confirm cancel",()=>{
    cy.ConfirmCancelAlert("#button4 p","Press a button!");
})

Then("valide the {string} message is displayed",(condirmCancelMsg)=>{
    alerts.confirmMsg().should("include",condirmCancelMsg);
})
});