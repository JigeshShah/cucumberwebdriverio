var { Given,When, Then } = require('cucumber');
var assert = require('assert');
var expect = require('chai').expect;
var HomePage = require('./classes/HomePage');
var SearchCityResults = require('./classes/SearchCityResults');
var SignIn = require('./classes/SignIn');

  Given(/^I am on the Home page$/, function() {
   browser.url(`https://openweathermap.org/`);
  });


  Then(/^I should be able to validate the Important elements$/, function() {
    const CurrentWeather = HomePage.WeatherLabel.getText();
		assert.equal(CurrentWeather, 'Current weather and forecasts in your city'); 
		assert.equal(HomePage.Weather_in_your_city.getText(), 'Weather in your city'); 
		assert.equal(HomePage.Sign_In.getText(), 'Sign In'); 
		assert.equal(HomePage.Sign_Up.getText(), 'Sign Up'); 
		assert.equal(HomePage.Weather.getText(), 'Weather'); 
		assert.equal(HomePage.Maps.getText(), 'Maps'); 
		assert.equal(HomePage.API.getText(), 'API'); 
		assert.equal(HomePage.Price.getText(), 'Price'); 
		assert.equal(HomePage.Partners.getText(), 'Partners'); 
		assert.equal(HomePage.Stations.getText(), 'Stations'); 
		assert.equal(HomePage.Widgets.getText(), 'Widgets'); 
		assert.equal(HomePage.Blog.getText(), 'Blog'); 
		assert.equal(HomePage.Current_location.getText(), 'Current location'); 
		assert.equal(HomePage.Current_weather.getText(), 'Current weather and forecasts in your city'); 
		assert.equal(HomePage.Sentinel_2_via_Openweather_API.getText(), 'Sentinel-2 via Openweather API'); 
		assert.equal(HomePage.How_to_start.getText(), 'How to start'); 
		assert.equal(HomePage.APIs_for_Agriculture.getText(), 'APIs for Agriculture on agromonitoring.com'); 
		assert.equal(HomePage.Move_to_agromonitoring_com.getText(), 'Move to agromonitoring.com'); 
		assert.equal(HomePage.Forecast_Historical_weather_map.getText(), 'Forecast & Historical weather map'); 
		assert.equal(HomePage.Weather_map_layers.getText(), '15 Weather map layers'); 
		assert.equal(HomePage.Interactive_current_weather_map.getText(), 'Interactive current weather map'); 
  });

  When(/^I enter a valid city name "([^"]*)" and click on Search$/, function(arg1) {
		HomePage.EnterCityName.addValue(arg1);
		HomePage.SearchCity.click();
  });

  
  Then(/^I should be able to view the City "([^"]*)" as a Link$/, function(arg1) {
    SearchCityResults.CityLink.waitForVisible();
		const CityLinkText = SearchCityResults.CityLink.getText();
		assert.equal(CityLinkText, arg1);
  });

  
  When(/^I enter an invalid city name "([^"]*)" and click on Search$/, function(arg1) {
   HomePage.EnterCityName.addValue(arg1);
		HomePage.SearchCity.click();
  });
  
  
  Then(/^I should be able to view the not found error message$/, function() {
    SearchCityResults.CityNotFound.waitForVisible();
		const error = SearchCityResults.CityNotFound.getText();
		assert.equal(error, '×\nNot found');
  });

  
  When(/^I click on the SignIn link$/, function() {
   HomePage.SignInLink.waitForVisible();
		HomePage.SignInLink.click();		
  });
  
   When(/^I Enter the username and password$/, function() {
   	SignIn.TXT_UserName.addValue(`Testuser11212@gmail.com`);
		SignIn.TXT_Password.addValue(`Testuser111`);
		SignIn.BTN_SignIn.click();
  });
  
  Then(/^I should be able to validate the view the SignIn Success Message$/, function() {
    SignIn.LBL_SignInSuccess.waitForVisible();
		const SignIn_Message = SignIn.LBL_SignInSuccess.getText();
		assert.equal(SignIn_Message, 'Signed in successfully.');
  });
