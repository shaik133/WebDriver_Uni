class Login
{
titleOfThePage()
{
    return cy.get("title")  //WebDriver | Login Portal
}

username()
{
    return cy.get("#text")
}

password()
{
    return cy.get("#password")
}

loginBtn()
{
    return cy.get("#login-button")
}
}

export default Login;
// alert text = validation failed