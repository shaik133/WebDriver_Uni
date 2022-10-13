import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";
import AutoComplete from "../../support/POM/autoComplete_page";

let index = new Index();
let autoComplete= new AutoComplete();

Given("Navigate to url of WebdriverUniversity and validate the page title {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
})

When("user click on the ACTIONS link page should load and contain url {string}",(urlParam)=>{
    index.autoComplete().invoke("removeAttr","target").click();
    cy.url().then(expUrl=>{
        expect(expUrl).contains(urlParam);
    })
})

Then("Input the letter {string} in the myInput dialogue box",(foodChar)=>{
autoComplete.myInput().type(foodChar);
})

Then("Autocomplete and select food item {string}",(foodItem)=>{
autoComplete.items().contains(foodItem).click();
})

Then("click on the submit button and verify the url has selected {string}",(foodItem)=>{
autoComplete.submitButton().click();
cy.url().then(actUrl=>{
    expect(actUrl).contains(foodItem)
})
})