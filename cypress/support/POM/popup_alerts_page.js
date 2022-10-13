class Alerts
{
simpleAlertBtn()
{
    return cy.get("#button1") //I am an alert box!
}

modalPopUpBtn()
{
    return cy.get("#button2 p")
}

modalPromptTitle()
{
    return cy.get(".modal-header .modal-title")//It’s that Easy!!  Well I think it is.....
}

modalPromptCloseBtn()
{
    return cy.get("div[class='modal-footer'] button")
}

ajaxBtn()
{
    return cy.get("#button3 p")
}

ajaxClickBtn()
{
    return cy.get("div[id='myDiv'] span");
}

ajaxClickPromptTitleMsg()
{
    return cy.get("h4[class='modal-title']") //The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.
}

ajaxPromtClosebtn()
{
    return cy.get("div[class='modal-footer'] button")
}

confirmAlertBtn()
{
    return cy.get("#button4 p")
}

confirmMsg()
{
    return cy.get("div[class='section-title'] p[id='confirm-alert-text']") //You pressed Cancel! You pressed OK!
}



}

export default Alerts