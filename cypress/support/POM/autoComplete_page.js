class AutoComplete
{
    myInput()
    {
        return cy.get("#myInput")
    }

    submitButton()
    {
        return cy.get("#submit-button")
    }

    items()
    {
        return cy.get(".autocomplete-items div")
    }
}

export default AutoComplete