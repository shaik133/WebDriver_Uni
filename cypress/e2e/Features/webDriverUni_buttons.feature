Feature: Validate Webdriver Uni buttons

    Validate the diffrent buttons with diffrent approach
    Background:  launch webdriver uni and click on the click buttons link
        Given Launch the Webdriver_Uni baseUrl and the landing page tilte should be "WebDriverUniversity.com"
        When user clicks on the BUTTON CLICKS link and validate the url of the page conatins "Click-Buttons"

    Scenario: Click on the button1 using normal click approach and validate msg
        Then click on the button1 
        Then validate the prompt msg and close the button1 prompt

    Scenario: Click on the button2 using invoke method and validate msg
        Then click on the button2 by triggering click method 
        Then validate the prompt msg and close the button2 prompt

    Scenario: Click on the button3 using mouse move action and validate the msg
        Then click on the button3 by mouse movement
        Then validate the prompt msg and close the button3 prompt