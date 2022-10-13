import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Index from "../../support/POM/index_page";
import Actions from "../../support/POM/actions_page"

let index= new Index();
let actions = new Actions();

Given("Navigate to base url of WebdriverUniversity and validate the page title {string}",(title)=>{
    cy.visit(Cypress.env("base_url"));
    index.titleOfThePage().then(expTitle=>{
        expect(expTitle.text()).eq(title)
    })
})

When("user clicks on the ACTIONS link page should load and contain url {string}",(urlParam)=>{
index.actionsLink().invoke("removeAttr","target").click();
cy.url().then(expUrl=>{
    expect(expUrl).contains(urlParam);
})
})

Then("perform various mouse actions and validate the assertions",()=>{
    actions.draggable().trigger("mousedown",{which:1});
    actions.droppable().trigger("mousemove").invoke("mouseup")
    actions.droppableText().should("contain","Dropped!")

    //DoubleClick
    actions.doubleClick().trigger("dblclick").should("have.class","div-double-click double")

    //Hover Over me first
    actions.hoverOnFirst().invoke("mouseover")
    cy.Alert("Well done you clicked on the link!");
    actions.clickFirstHoverLink().click({force: true});

    //Hover Over me second
    actions.hoverOnSecond().invoke("mouseover")
    cy.Alert("Well done you clicked on the link!");
    actions.clickSecondHoverLink().click({force: true});

    actions.dontReleaseBtn().invoke("mousedown").invoke("attr","style").should("include","background: rgb(0, 255, 0); font-size: 30px;")
})