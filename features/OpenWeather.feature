Feature: Test OpenWeather functionalities

    As a User I access the OpeanWeather Application
	And I validate the functionalities of the Application

    Background:

        Given I am on the Home page

    Scenario: Validating the Elements on the Home Page
       Then I should be able to validate the Important elements
	   
	   Scenario Outline: Verify the valid Search City functionality
	   When I enter a valid city name <CityName> and click on Search
       Then I should be able to view the City <CityNameSearchResult> as a Link
	   
	    Examples:
        |CityName| |CityNameSearchResult|
        |"Mumbai"| |"Mumbai, IN"|
        |"delhi"| |"Delhi, IN"|
		
	  Scenario Outline: Verify the invalid Search City functionality
        When I enter an invalid city name <CityName> and click on Search
       Then I should be able to view the not found error message
	   
	    Examples:
	    |CityName|
        |"ashasjkas"|
        |"zxkzxjzxj"|
	   
	 Scenario: Verify the SignIn Functionality
	   When I click on the SignIn link
	   And  I Enter the username and password
       Then I should be able to validate the view the SignIn Success Message