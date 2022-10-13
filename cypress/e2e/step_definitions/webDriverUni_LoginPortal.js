import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";
import Login from "../../support/POM/login_portal_page";


let index = new Index();
let login = new Login();

Given("Hit the Webdriver_Uni baseUrl and the landing page tilte should be {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
    })

When("user clicks on the Login portal and validate the title of the page having {string}",(title)=>{
    index.loginPortalLink().invoke("removeAttr","target").click();
    login.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title);
    })
})

Then("Enter the invalid username {string} and password {string}",(username, password)=>{
    login.username().type(username);
    login.password().type(password);
    
})
Then("click on the login btn and user should prompted with alert with the error {string}",(alertMsg)=>{
    // cy.on("window:alert",(alert)=>{
    //     expect(alert).to.eq(alertMsg)
    // })
    cy.Alert(alertMsg)
    login.loginBtn().click();
})