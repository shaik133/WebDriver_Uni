Feature: Webdriver University Login

    Validate the login feature of webdriver University

    Scenario: validate the login feature with invalid credentials
        Given Hit the Webdriver_Uni baseUrl and the landing page tilte should be "WebDriverUniversity.com"
        When user clicks on the Login portal and validate the title of the page having "WebDriver | Login Portal"
        Then Enter the invalid username "webdriver" and password "webdriver@8009"
        Then click on the login btn and user should prompted with alert with the error "validation failed"