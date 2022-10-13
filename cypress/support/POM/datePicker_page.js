class DatePicker
{
datePickBox()
{
    return cy.get(".input-group-addon")
}

nextButton()
{
    return cy.get(".datepicker-days .next")
}

prevButton()
{
    return cy.get(".datepicker-days .prev")
}

datePickerSwitch()
{
    return cy.get(".datepicker-months .datepicker-switch")
}


selectMonth()
{
    return cy.get(".datepicker-months td span")
}

selectDay()
{
    return cy.get(".datepicker-days td[class='day']")
}


}

export default DatePicker;