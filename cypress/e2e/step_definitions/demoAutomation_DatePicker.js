import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DatePicker from "../../support/POM/Demo_AutomationTesting/demo_DatePicker_page";

let datepicker= new DatePicker();

Given("Launch {string}",(url)=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit(url);
})

When("Click on the dataPicker box",()=>{
    datepicker.datePickerBox().click();

})

Then("Select given date, month and Year",()=>{

cy.SelectYear(2022);
cy.SelectMonth("Febraury");
cy.SelectDate(5);

})