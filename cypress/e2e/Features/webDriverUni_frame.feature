Feature: I frame testing

    Test I frame

    Scenario: Break the frame and test the component inside iframe
        Given Launch WebDriver Uni 
        When click on the FRAME button and landing page should include url "IFrame"
        Then Click on the find out more button
        Then prompt is dispalyed should include text "Welcome to webdriveruniversity.com" and close prompt