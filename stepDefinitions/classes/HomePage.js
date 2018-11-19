// login.page.js
var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    WeatherLabel: { get: function () { return $('//*[@id="widget"]/div/div/h2'); } },
    EnterCityName: { get: function () { return $('(//input[@id=\'q\'])[2]'); } },
    SearchCity:    { get: function () { return $('(//button[@type=\'submit\'])[2]'); } },
    SignInLink:    { get: function () { return $('//a[contains(text(),\'Sign In\')]'); } },
    Weather_in_your_city: { get: function () { return $('//a[contains(text(),\'Weather in your city\')]'); } },
    Sign_In: { get: function () { return $('//a[contains(text(),\'Sign In\')]'); } },
    Sign_Up: { get: function () { return $('//a[contains(text(),\'Sign Up\')]'); } },
    Weather: { get: function () { return $('(//a[contains(text(),\'Weather\')])[2]'); } },
    Maps: { get: function () { return $('//a[contains(text(),\'Maps\')]'); } },
    API: { get: function () { return $('//a[contains(text(),\'API\')]'); } },
    Price: { get: function () { return $('//a[contains(text(),\'Price\')]'); } },
    Partners: { get: function () { return $('//a[contains(text(),\'Partners\')]'); } },
    Stations: { get: function () { return $('//a[contains(text(),\'Stations\')]'); } },
    Widgets: { get: function () { return $('//a[contains(text(),\'Widgets\')]'); } },
    Blog: { get: function () { return $('//a[contains(text(),\'Blog\')]'); } },
    Current_location: { get: function () { return $('(//button[@type=\'button\'])[2]'); } },
    Current_weather: { get: function () { return $('//div[@id=\'widget\']/div/div/h2'); } },
    Sentinel_2_via_Openweather_API: { get: function () { return $('//div[2]/h2'); } },
    How_to_start: { get: function () { return $('//a[contains(text(),\'How to start\')]'); } },
    APIs_for_Agriculture: { get: function () { return $('//div[2]/div[2]/h2'); } },
    Move_to_agromonitoring_com: { get: function () { return $('//a[contains(text(),\'Move to agromonitoring.com\')]'); } },
    Forecast_Historical_weather_map: { get: function () { return $('//a[contains(text(),\'Forecast & Historical weather map\')]'); } },
    Weather_map_layers: { get: function () { return $('//a[contains(text(),\'15 Weather map layers\')]'); } },
    Interactive_current_weather_map: { get: function () { return $('//a[contains(text(),\'Interactive current weather map\')]'); } },
	
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'HomePage');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = HomePage;