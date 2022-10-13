Feature: Actions

    Perform mouse actions like, drag drop, hover, doubleclick, click&hold

    Scenario: Perform actions
        Given Navigate to base url of WebdriverUniversity and validate the page title "WebDriverUniversity.com"
        When user clicks on the ACTIONS link page should load and contain url "Actions"
        Then perform various mouse actions and validate the assertions
        