/**
 * Created by Keshav on 10/16/2016.
 */

var util = require('util'),
    login_page = require('./../PageObjects/login_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),

    helperUtil = require('./../Utilities/helperUtil'),

    JSONData_production = require('./../testData/testdata_production.json'),
    JSONData;

console.log("ENVIRONMENT IS :: "+process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    JSONData = JSONData_production;
}


console.log(JSONData.AutoTextList[0].BASE_URL);

describe('Test Login Flow ', function () {

    it('Test UserName and Password Input Fields', function () {
        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);
        browser.driver.sleep(3000);

        expect(login_page.login_Element_UserName().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_Password().isDisplayed()).toBeTruthy();

    });

    it('Test SignIn Text,Close Button,Remember me,Forgot Password,SignIn Button and Request for a Demo Link',function () {
        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);
        browser.driver.sleep(3000);

        expect(login_page.login_Element_SignIn().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_Close().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_RememberMe().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_ForgotPassword().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_SignInButtonLink().isDisplayed()).toBeTruthy();
        expect(login_page.login_Element_RequestForADemo().isDisplayed()).toBeTruthy();

    });

    it('Test clicking on Cross Button, User should Redirect to Home Page ', function () {
        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);
        browser.driver.sleep(3000);

        login_page.login_Element_Close().click();
        browser.driver.sleep(3000);
        expect(browser.driver.getCurrentUrl()).toContain("https://www.insight360.io/");
        browser.driver.sleep(2000);
    });

    it('After Successful Login , User Redirected to DashBoard Page', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);
        browser.driver.sleep(2000);
        dashboard_page.dashboard_Header().then(function (headerText) {
            expect(headerText).toBe('Dashboard');
        });
        browser.driver.sleep(2000);

        helperUtil.logout();
    });

    it('Login using SASB User', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);

        browser.driver.sleep(2000);
        helperUtil.logout();
    });

    it('Login using Non SASB User', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.Non_SASBUser.Non_SASBUserName, JSONData.Non_SASBUser.Non_SASBPassword);

        browser.driver.sleep(2000);
        helperUtil.logout();
    });

    it('Test Invalid Username and Valid Password ', function () {


            browser.get(JSONData.AutoTextList[0].BASE_URL);
            isAngularSite(true);

            helperUtil.login(JSONData.AutoTextList[0].InvalidUserName, JSONData.AutoTextList[0].Password);
            expect(login_page.invalidCredentials_NoAccountExist().getText()).toEqual('Sign on failed: No account exists for this email');

        });

    it('Test Invalid Password and Valid Username ', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].InvalidPassword);
        expect(login_page.invalidCredentials_InvalidPassword()).toEqual('Sign on failed: Invalid Credentials');

    });

    it('Test Invalid UserName and Invalid Password ', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].InvalidUserName, JSONData.AutoTextList[0].InvalidPassword);
        expect(login_page.invalidCredentials_NoAccountExist()).toEqual('Sign on failed: No account exists for this email');

    });

    it('Test Blank UserName and Blank Password ', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].BlankUserName, JSONData.AutoTextList[0].BlankPassword);
        expect(login_page.invalidCredentials_userName()).toEqual('Please enter your e-mail address.');
        expect(login_page.invalidCredentials_Password()).toEqual('Please enter your password.');

    });

    it('Test Blank UserName and Valid Password ', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].BlankUserName, JSONData.AutoTextList[0].Password);
        expect(login_page.invalidCredentials_userName()).toEqual('Please enter your e-mail address.');

    });

    it('Test Valid UserName and Blank Password', function () {

        browser.get(JSONData.AutoTextList[0].BASE_URL);
        isAngularSite(true);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].BlankPassword);
        expect(login_page.invalidCredentials_Password()).toEqual('Please enter your password.');

    });

});

