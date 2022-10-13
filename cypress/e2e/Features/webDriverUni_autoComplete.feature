Feature: Autocomplete

    Auto complete the given food item and select

    Scenario Outline: AutoComplete the item searched with letter H and select the food item
        Given Navigate to url of WebdriverUniversity and validate the page title "WebDriverUniversity.com"
        When user click on the ACTIONS link page should load and contain url "Autocomplete"
        Then Input the letter "H" in the myInput dialogue box
        Then Autocomplete and select food item "<FoodItem>"
        Then click on the submit button and verify the url has selected "<FoodItem>"

    Examples:
            |FoodItem|
            |Honey   |
            |Hummus  |