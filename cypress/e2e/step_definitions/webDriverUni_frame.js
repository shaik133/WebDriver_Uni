import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"

import Index from "../../support/POM/index_page"
import Frame from "../../support/POM/frame_page"

let index = new Index();
let frame = new Frame();

Given("Launch WebDriver Uni",()=>{
    cy.visit(Cypress.env("base_url"));
})

When("click on the FRAME button and landing page should include url {string}",(urlParam)=>{
    index.frame().invoke("removeAttr","target").click();
    cy.url().then(actUrl=>{
        expect(actUrl).includes(urlParam);
    })
})

Then("Click on the find out more button",()=>{
    cy.iFrame("iframe[id='frame']","a[href*='contactus']").click();  
});

Then("prompt is dispalyed should include text {string} and close prompt",(promptMsg)=>{
    cy.go("back")
})