Feature: Propmt ans alerts handle

    Automate the javascript prompt and alerts

    Background: Launch website and navigate to the specific feature of appication
        Given Launch WebDriver uni website and validate the title of the page should be "WebDriverUniversity.com"
        When Click on the prompt and alerts link in index page and validate the landing page url includes "Popup-Alerts"

    Scenario: Handling simple javascript alert
        Then Click on the Javscript alert and validate the alert msg include "I am an alert box!"

    Scenario: Handle Modal popup
        Then user clicks on modal popup button
        Then user validate the prompt title msg include "that Easy!!  Well I think it is....."
        Then close the prompt
    
    Scenario: Handle Ajax loaded
        Then user clicks on the ajax loader button and navigated url must contain "Ajax-Loader"
        Then Click on the click me button and it should prompt a msg "Well Done For Waiting....!!!"

    Scenario: Handle javascript confirm box ok
        Then click on the confirm box btn 
        Then validate the "You pressed OK!" message is displayed

    Scenario:  Handle javascript confirm box cancel
        Then click on the confirm box btn and confirm cancel
        Then valide the "You pressed Cancel!" message is displayed
        
