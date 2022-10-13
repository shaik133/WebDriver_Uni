class DCR
{
    dropdowmMenu1()
    {
return cy.get("#dropdowm-menu-1");
    }

    dropdowmMenu2()
    {
        return cy.get("#dropdowm-menu-2")
    }

    dropdowmMenu3()
    {
        return cy.get("#dropdowm-menu-3")
    }

    checkboxes()
    {
        return cy.get("input[type='checkbox']")
    }

    radio()
    {
        return cy.get("input[value='orange']")
    }


    isCabbageDisabled()
    {
        return cy.get("input[value='cabbage']")
    }

    fruitSelects()
    {
        return cy.get("#fruit-selects")
    }

    
}

export default DCR;