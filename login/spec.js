'use strict';
//CHANGE THESE URLS IF NECESSARY
const URLLOGIN = "http://kaboo:flappybird@qatest.staging.kaboo.com/en/login";
const URLLOBBY = "http://kaboo:flappybird@qatest.staging.kaboo.com/en/lobby";
//=====================================================
//GLOBAL VARIABLES
var EC = protractor.ExpectedConditions;
var KabooPageObject = require('./KabooPageObject.js');
var page;
//=====================================================
//TEST STARTS HERE
page = new KabooPageObject();

describe('Kaboo Scenario Two Test Leigh Hobson', function() {
	
describe('Given user is on /login page', function() {
it('should check the required URL is loaded', function() {
	browser.wait(EC.urlIs(URLLOGIN, 5000)); //check correct page loaded
});

it('should check the required elements are loaded', function() {
	expect(page.userName.isPresent()).toEqual(true); //check username element is on screen
	expect(page.userPass.isPresent()).toEqual(true); //check password element is on screen
	expect(page.loginBtn.isPresent()).toEqual(true); //check login button element is on screen
});
});

describe('When fills username/password', function() {
it('should enter valid information in the Username and Password fields', function()	{
	page.typeName("dangbp");
	page.typePass("Autotest1");
});

it('should check that data has been entered in to the Username and Password fields', function()	{
	expect(page.userName.getAttribute('value')).toEqual(USERNAME);
	expect(page.userPass.getAttribute('value')).toEqual(PASSWORD);
});
});

describe('And clicks Log in button', function() {
it('should click Log in button', function()	{
	page.logIn();
	browser.sleep(5000); //debug
});
});

describe('Then user should be redirected to account page /profile', function() {
it('should be redirected to account page /profile', function()	{
	browser.wait(EC.urlIs(URLLOBBY, 5000)); //check that lobby URL is loaded
});
});
it('', function() {}); //workaround for html-screenshot-reporter never showing last result in test report
});