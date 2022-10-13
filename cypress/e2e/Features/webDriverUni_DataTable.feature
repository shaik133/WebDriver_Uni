Feature: Data validation from dataTable

    validate the data present in the table

    Scenario: Check for the Lastname and age of the John
        Given Launch the Webdriver site and verify the title of the page is "WebDriverUniversity.com"
        When Click on the DATA, TABLES & BUTTON STATES and validate the url conatins "Data-Table"
        Then Iterate through the table and check for the lastname of "John"  is "Smith"
        Then check for age of "John" is 45