Feature: Webdriver_University ContactUs feature

    Automate ContactUs feature

    Background: Fill contact us form
        Given Hit the Webdriver_Uni baseUrl and teh landing page tilte should be "WebDriverUniversity.com"
        When user clicks on the contact us link and verify landing page title "WebDriver | Contact Us"
        

    Scenario: Fill complete contact us form and submit
        Then Fill all the field and submit the form
        Then user should get "Thank You for your Message!"

    Scenario: Fill partial conatct us form and submit
        Then Fill partial fields and submit the form
        Then user should be prompted "Error: all fields are required" message


    Scenario: Fill contact us form without email address
        Then Fill the field without email and submit the form
        Then user should be prompted "Error: Invalid email address"

    Scenario: Fill the contact form and reset
        Then Fill the form and reset