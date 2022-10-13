Feature: Dropdown, Checkbox and Radio Buttons

    Verify dropdown, Checkbox and Radio buutons

    Background: Launch Webdriver Uinversity and click on the dropdown link
        Given Navigate to the Webdriver_Uni baseUrl and the landing page tilte should be "WebDriverUniversity.com"
        When user clicks on the DROPDOWN, CHECKBOXE & RADIO BUTTON link and validate the url of the page conatins "Dropdown-Checkboxes-RadioButtons"
    
    
    Scenario: Verify dropdowns
        Then select the dropdown menus and validate selected options
    
         
    
    Scenario: Verify checkboxes
        Then select all checkboxes  

    Scenario: verify Radio button
        Then tick orange radio button and validate the same
        Then validate Cabbage radio button is disabled
        
