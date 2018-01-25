'use strict';
const URL = "http://kaboo:flappybird@qatest.staging.kaboo.com/en/login";
var KabooPageObject = function () {
browser.get(URL);
};

KabooPageObject.prototype = Object.create({}, {

//Scenario 2 LOGIN
userName: { get: function () { return element(by.css('[name="username"]')); }},
userPass: { get: function () { return element(by.css('[name="password"]')); }},
loginBtn: { get: function () { return element(by.css('.e-btn')); }},
typeName: { value: function (user) { return this.userName.sendKeys(user); }},
typePass: { value: function (pass) { return this.userPass.sendKeys(pass); }},
logIn: { value: function () { element(by.css('[name="formLogin"]')).submit(); }}

});

module.exports = KabooPageObject;