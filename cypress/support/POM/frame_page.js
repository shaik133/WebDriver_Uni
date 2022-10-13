class Frame{
findMoreBtn()
{
    return cy.get("#button-find-out-more");
}

promptMsg()
{
    return cy.get("div[class='modal-body'] p",{timeout:6000});
}

promptClose()
{
    return cy.get("div[class='modal-footer'] button").next();
}

contactUs()
{
    return cy.contains("Contact Us")
}
}

export default Frame;