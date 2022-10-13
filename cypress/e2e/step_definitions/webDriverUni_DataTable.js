import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";

let index = new Index();

Given("Launch the Webdriver site and verify the title of the page is {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
})

When("Click on the DATA, TABLES & BUTTON STATES and validate the url conatins {string}",(urlParam)=>{
    index.dataTable().invoke("removeAttr","target").click();
cy.url().then(expUrl=>{
    expect(expUrl).contains(urlParam);
})
})

Then("Iterate through the table and check for the lastname of {string}  is {string}",(firstName, lastName)=>{
    cy.SelectLastNameFromTable(firstName,lastName);
})

Then("check for age of {string} is {int}",(firstName,age)=>{
    cy.SelectAgeFromTable(firstName,age);
})
