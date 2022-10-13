class Index
{

    titleOfThePage()
    {
        return cy.get("title")
    }

contactUsLink()
{
    return cy.contains("CONTACT US")
}

loginPortalLink()
{
    return cy.contains("LOGIN PORTAL");
}

buttonLink()
{
    return cy.contains("BUTTON CLICKS")
}

dropdownLink()
{
    return cy.contains("DROPDOWN")
}

actionsLink()
{
    return cy.contains("ACTIONS")
}

alertsLink()
{
    return cy.contains("POPUP & ALERTS")
}

frame()
{
    return cy.contains("IFRAME")
}

dataTable()
{
    return cy.contains("TABLES")
}

autoComplete()
{
    return cy.contains("AUTOCOMPLETE TEXTFIELD");
}

datePickerLink()
{
    return cy.contains("DATEPICKER")
}



}

export default Index;