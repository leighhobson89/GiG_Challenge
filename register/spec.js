'use strict';
//CHANGE URL CONSTANT IF NECESSARY
const URLSIGNUP = "http://kaboo:flappybird@qatest.staging.kaboo.com/en/signup";
//=====================================================
//GLOBAL VARIABLES
var EC = protractor.ExpectedConditions;
var KabooPageObject = require('./KabooPageObject.js');
var page;
//=====================================================
//TEST STARTS HERE
page = new KabooPageObject();

describe('Kaboo Scenario One Test Leigh Hobson', function() {
	
describe('Given user is on /signup page', function() {
it('should check the required URL is loaded', function() {
	browser.wait(EC.urlIs(URLSIGNUP, 5000));
});

it('should check the required elements are loaded', function() {
	expect(page.regFormPageOne.isPresent()).toEqual(true); //check form element is on screen
	expect(page.emailField.isPresent()).toEqual(true); //check email element is on screen
	expect(page.userNameChooser.isPresent()).toEqual(true); //check username element is on screen
	expect(page.passwordChooser.isPresent()).toEqual(true); //check password element is on screen
	expect(page.passwordRepeat.isPresent()).toEqual(true); //check password repeat element is on screen
	expect(page.tAndC.isPresent()).toEqual(true); //check Terms and Conditions checkbox element is on screen
	expect(page.toPageTwoBtn.isPresent()).toEqual(true); //check NEXT button element is on screen
	expect(page.firstName.isPresent()).toEqual(true); //check First Name element is on screen
	expect(page.lastName.isPresent()).toEqual(true); //check Surname element is on screen
	expect(page.days.isPresent()).toEqual(true); //check Day element is on screen
	expect(page.months.isPresent()).toEqual(true); //check Month element is on screen
	expect(page.years.isPresent()).toEqual(true); //check Year element is on screen
	expect(page.sex.isPresent()).toEqual(true); //check Sex element is on screen
	expect(page.address.isPresent()).toEqual(true); //check Address element is on screen
	expect(page.postCode.isPresent()).toEqual(true); //check Post Code element is on screen
	expect(page.city.isPresent()).toEqual(true); //check City element is on screen
	expect(page.country.isPresent()).toEqual(true); //check Country element is on screen
	expect(page.currency.isPresent()).toEqual(true); //check Currency element is on screen
	expect(page.phonePrfx.isPresent()).toEqual(true); //check Phone Prefix element is on screen
	expect(page.phoneNo.isPresent()).toEqual(true); //check Phone Number element is on screen
});
});

describe('When fills all fields with valid data on step 1', function() {
it('should fill in all the fields with VALID data', function()	{
	page.typeEmail("qaleigh@tester.com");
	page.typeNewUserName("Qaleigh1");
	page.typeNewPassword("Ab111111");
	page.typeRepeatPassword("Ab111111");
	page.checkTandCBox();
});
});

describe('And clicks NEXT', function() {
it('should click NEXT', function()	{
	expect(page.toPageTwoBtn.isPresent()).toEqual(false); //checks that button is no longer inactive i.e all info valid
	page.clickNext();
});
});

describe('And fills all fields with valid data from step 2', function() {
it('should fill all fields with valid data from step 2', function()	{
	page.typeFname("John");
	page.typeSname("Smith");
	page.typeDay("12");
	page.typeMonth("11");
	page.typeYear("1984");
	page.selectSex();
	page.typeAddress("12 Hardacre Road");
	page.typePcode("BB18 5ES");
	page.typeCity("Barnoldswick");
	page.selectCountry();
	page.selectCurrency();
	page.selectPhnPrfx();
	page.typePhNo("07565844758");
});
});

describe('Then register button is enabled and clickable', function() {
it('should enable the Register button to be clickable', function()	{
	expect(page.regButtonEnabled.isPresent()).toEqual(true);
});

it('', function() {}); //workaround for html-screenshot-reporter never showing last result in test report
});
});