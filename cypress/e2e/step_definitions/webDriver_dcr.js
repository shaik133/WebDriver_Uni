import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import DCR from "../../support/POM/dcr_page";
import Index from "../../support/POM/index_page";

let index= new Index();
let dcr= new DCR();


Given("Navigate to the Webdriver_Uni baseUrl and the landing page tilte should be {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
    })

When("user clicks on the DROPDOWN, CHECKBOXE & RADIO BUTTON link and validate the url of the page conatins {string}",(urlParam)=>{
    index.dropdownLink().invoke("removeAttr","target").click();
    cy.url().then(expUrl=>{
        expect(expUrl).contains(urlParam);
    })
})

Then("select the dropdown menus and validate selected options",()=>{
    dcr.dropdowmMenu1().select("SQL").should("have.value","sql");
    dcr.dropdowmMenu2().select("JUnit").should("have.value","junit");
    dcr.dropdowmMenu3().select("JQuery").should("have.value","jquery")
})


Then("select all checkboxes",()=>{
    dcr.checkboxes().check().should("be.checked");
})

Then("tick orange radio button and validate the same",()=>{
    dcr.radio().check().should("have.value","orange");
})
Then("validate Cabbage radio button is disabled",()=>{
    dcr.isCabbageDisabled().should("be.disabled")
})