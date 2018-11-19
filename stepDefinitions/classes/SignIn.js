// login.page.js
var Page = require('./page')

var SignIn = Object.create(Page, {
    /**
     * define elements
     */
    TXT_UserName: { get: function () { return $(`//input[@id='user_email']`); } },
    TXT_Password: { get: function () { return $(`//input[@id='user_password']`); } },
    BTN_SignIn:    { get: function () { return $(`//input[@name='commit']`); } },
    LBL_SignInSuccess:    { get: function () { return $(`//div[3]/div/div/div/div[2]`); } },

	
	
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'SignIn');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = SignIn;