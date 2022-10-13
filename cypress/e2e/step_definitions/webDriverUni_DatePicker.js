import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";
import DatePicker from "../../support/POM/datePicker_page";

let index= new Index();
let datepicker = new DatePicker();

Given("Launch WebDriverUni and validate the title of the page is {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
})

When("Click on the Datepicker and validate the page url has {string}",(paramUrl)=>{
    index.datePickerLink().invoke("removeAttr","target").click();
cy.url().then(expUrl=>{
    expect(expUrl).contains(paramUrl);
})
})

Then("Click on the Datepicker box",()=>{
    datepicker.datePickBox().click();
    
})

Then("Select the date, month and year",()=>{
datepicker.datePickerSwitch().click({force: true});
cy.pause();
cy.SelectYear(2024);
cy.SelectMonth("Feb");
cy.SelectDate(5)
})