// login.page.js
var Page = require('./page')

var SearchCityResults = Object.create(Page, {
    /**
     * define elements
     */
    CityLink: { get: function () { return $(`b > a`); } },
    CityNotFound: { get: function () { return $(`div.alert.alert-warning`); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'SearchCityResults');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = SearchCityResults;