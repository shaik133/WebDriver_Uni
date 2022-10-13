Feature: Pick the date

    Pick the date, month and year 

    Scenario: Pick the given date month and year
        Given Launch WebDriverUni and validate the title of the page is "WebDriverUniversity.com"
        When Click on the Datepicker and validate the page url has "Datepicker"
        Then Click on the Datepicker box
        Then Select the date, month and year