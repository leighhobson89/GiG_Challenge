'use strict';
const URL = "http://kaboo:flappybird@qatest.staging.kaboo.com/en/signup";
var KabooPageObject = function () {
browser.get(URL);
};

KabooPageObject.prototype = Object.create({}, {
	
//Page 1 REGISTRATION
regFormPageOne: { get: function () { return element(by.css('[name="formSignup"]')); }},
emailField: { get: function () { return element(by.css('[name="email"]')); }},
userNameChooser: { get: function () { return element(by.css('[name="username"]')); }},
passwordChooser: { get: function () { return element(by.css('input[name="password"]')); }},
passwordRepeat: { get: function () { return element(by.css('input[name="passwordRepeat"]')); }},
tAndC: { get: function () { return element(by.css('label[for="termsAndConditions"]')); }},
toPageTwoBtn: { get: function () { return element(by.css('button.is-inactive:not(.m-auth-registration__button--step2)')); }},
typeEmail: { value: function (email) { return this.emailField.sendKeys(email); }},
typeNewUserName: { value: function (newUser) { return this.userNameChooser.sendKeys(newUser); }},
typeNewPassword: { value: function (newPass) { return this.passwordChooser.sendKeys(newPass); }},
typeRepeatPassword: { value: function (repeatPass) { return this.passwordRepeat.sendKeys(repeatPass); }},
checkTandCBox: { value: function (user) { return this.tAndC.click(); }},
clickNext: { value: function () { element(by.css('button[class*="h-r"]:not(.m-auth-registration__button--step2)')).click(); }},

//Page 2 REGISTRATION
firstName: { get: function () { return element(by.css('[name="firstname"]')); }},
lastName: { get: function () { return element(by.css('[name="lastname"]')); }},
days: { get: function () { return element(by.css('[name="days"]')); }},
months: { get: function () { return element(by.css('[name="months"]')); }},
years: { get: function () { return element(by.css('[name="years"]')); }},
sex: { get: function () { return element(by.css('.c-field--registration-sex')); }},
address: { get: function () { return element(by.css('[name="address"]')); }},
postCode: { get: function () { return element(by.css('[name="postalCode"]')); }},
city: { get: function () { return element(by.css('[name="city"]')); }},
country: { get: function () { return element(by.css('.c-field--registration-country')); }},
currency: { get: function () { return element(by.css('.c-field--registration-currency')); }},
phonePrfx: { get: function () { return element(by.css('.c-field--registration-prefix')); }},
phoneNo: { get: function () { return element(by.css('[name="phoneNumber"]')); }},
typeFname: { value: function (fname) { return this.firstName.sendKeys(fname); }},
typeSname: { value: function (sname) { return this.lastName.sendKeys(sname); }},
typeDay: { value: function (day) { return this.days.sendKeys(day); }},
typeMonth: { value: function (month) { return this.months.sendKeys(month); }},
typeYear: { value: function (year) { return this.years.sendKeys(year); }},
selectSex: { value: function () { element(by.css('label[for="sexFemale"]')).click(); }},
typeAddress: { value: function (address) { return this.address.sendKeys(address); }},
typePcode: { value: function (pcode) { return this.postCode.sendKeys(pcode); }},
typeCity: { value: function (city) { return this.city.sendKeys(city); }},
selectCountry: { value: function () { 
element(by.css('[id="countrySelector"]')).click();
element(by.css('[id="countrySelector"] .e-flag--gb')).click(); }},
selectCurrency: { value: function () {
element(by.css('[id="currencySelector"]')).click();
element(by.css('[id="currencySelector"] a[data-value="GBP"]')).click(); }},
selectPhnPrfx: { value: function () {
element(by.css('[id="phonePrefix"]')).click();
element(by.css('[id="phonePrefix"] a[data-value="+44"]')).click(); }},
typePhNo: { value: function (phno) { return this.phoneNo.sendKeys(phno); }},
regButtonEnabled: { get: function () { return element(by.css('.m-auth-registration__button--step2:not(.is-inactive)')); }}
});

module.exports = KabooPageObject;