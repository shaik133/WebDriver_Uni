class DatePicker
{

    datePickerBox()
    {
        return cy.get("#datepicker1")
    }

nextButton()
{
    return cy.get("span[class='ui-icon ui-icon-circle-triangle-e']")
}

prevButton()
{
    return cy.get("span[class='ui-icon ui-icon-circle-triangle-w']")
}

datePickerMonth()
{
    return cy.get("span[class='ui-datepicker-month']")
}

datePickerYear()
{
    return cy.get("span[class='ui-datepicker-year']")
}

datePickerDays()
{
    return cy.get("table[class='ui-datepicker-calendar'] tbody tr td a")
}






}

export default DatePicker;