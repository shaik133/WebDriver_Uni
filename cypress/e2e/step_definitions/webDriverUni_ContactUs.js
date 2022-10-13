import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page"
import ContactUs from "../../support/POM/contactUs_page"

let index = new Index();
let contact = new ContactUs();

before(function(){
    cy.fixture("example").then(data=>{
     this.data=data;
    })
     })

Given("Hit the Webdriver_Uni baseUrl and teh landing page tilte should be {string}",(title)=>{
cy.visit(Cypress.env("base_url"));
//cy.visit("https://now.lilly.com")
//cy.visit("https://google.com")
index.titleOfThePage().then(expTitle=>{
    expect(expTitle.text()).eq(title)
})
})

When("user clicks on the contact us link and verify landing page title {string}",(title)=>{
index.contactUsLink().invoke("removeAttr","target").click();
contact.titleOfThePage().then(expTilte=>{
    expect(expTilte.text()).eq(title)
})
});

Then("Fill all the field and submit the form",function(){
    contact.firstName().type(this.data.FirstName);
    contact.lastName().type(this.data.lastName);
    contact.email().type(this.data.email);
    contact.textArea().type(this.data.body);
    contact.submitBtn().click();
    //contact.thankYouMsg().should("have.text","Thank You for your Message!");
});

Then("user should get {string}",(message)=>{
    contact.thankYouMsg().then(succMsg=>{
        expect(succMsg.text()).eq(message);
    })
})

Then("Fill partial fields and submit the form",function(){
    contact.lastName().type(this.data.lastName);
    contact.email().type(this.data.email);
    contact.textArea().type(this.data.body);
    contact.submitBtn().click();
})
Then("user should be prompted {string} message",(error)=>{
   contact.invalidErroMsg().should("contain",error);
})

Then("Fill the field without email and submit the form",function(){
    contact.firstName().type(this.data.FirstName);
    contact.lastName().type(this.data.lastName);
    contact.textArea().type(this.data.body);
    contact.submitBtn().click();
})

Then("user should be prompted {string}",(error)=>{
    contact.invalidErroMsg().should("contain",error);
})

Then("Fill the form and reset",function(){
    contact.firstName().type(this.data.FirstName);
    contact.lastName().type(this.data.lastName);
    contact.email().type(this.data.email);
    contact.textArea().type(this.data.body);
    contact.resetBtn().click()
})