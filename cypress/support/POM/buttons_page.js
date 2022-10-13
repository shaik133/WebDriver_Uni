class Buttons
{
 getUrl()
 {
    return cy.url();
 }

 button1()
 {
    return cy.get("#button1")
 }

 button2()
 {
    return cy.get("#button2")
 }

 button3()
 {
    return cy.get("#button3")
 }

 button1PromptMsg()
 {
    return cy.get("#myModalClick .modal-body p")
 }

 button1PromptCloseBtn()
 {
    return cy.get("#myModalClick .modal-footer button")
 }

button2PromptMsg()
{
return cy.get("#myModalJSClick .modal-body p")
}


button2PromptCloseBtn()
{
    return cy.get("#myModalJSClick .modal-footer button")
}



button3PromptMsg()
{
return cy.get("#myModalMoveClick .modal-body p")
}


button3PromptCloseBtn()
{
return cy.get("#myModalMoveClick .modal-footer button")
}

}

export default Buttons;