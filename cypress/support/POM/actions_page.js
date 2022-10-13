class Actions{

draggable()
{
    return cy.get("#draggable")
}

droppable()
{
    return cy.get("#droppable")
}

droppableText()
{
    return cy.get("div[id='droppable'] p ")
}

doubleClick()
{
    return cy.get("#double-click")
}


hoverOnFirst()
{
    return cy.get(".dropdown.hover")
}

clickFirstHoverLink()
{
    return cy.get(".dropdown.hover .list-alert")
}


hoverOnSecond()
{
    return cy.contains("Hover Over Me Second!")
}

clickSecondHoverLink()
{
    return cy.contains("Hover Over Me Second!").parent().find("a")
}

dontReleaseBtn()
{
    return cy.get("#click-box")
}

}

export default Actions