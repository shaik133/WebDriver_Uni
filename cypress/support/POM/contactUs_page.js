class ContactUs{
titleOfThePage()
{
    return cy.get("title")
}

firstName()
{
    return cy.get("input[name='first_name']");
}

lastName()
{
    return cy.get("input[name='last_name']");
}


email()
{
    return cy.get("input[name='email']");
}


textArea()
{
    return cy.get("textarea[name='message']");
}

submitBtn()
{
    return cy.get("input[value='SUBMIT']")
}

resetBtn()
{
    return cy.get("input[value='RESET']")
}

thankYouMsg()
{
    return cy.get("#contact_reply h1")//Thank You for your Message!
}

invalidErroMsg()
{
return cy.get("body") //Error: all fields are required, Error: Invalid email address
}

}

export default ContactUs;