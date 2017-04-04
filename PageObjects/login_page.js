/**
 * Created by Keshav on 04/04/2017.
 */

require('./dashboard_page.js');

var login_page = function() {

    this.login_closeCookies = function() {
        var login_closeCookies = element(by.xpath("/html/body/form/div[3]/article/div/button"));
        //expect(login_closeCookies.isPresent()).toBe(true,'Cookies Not found');
        return login_closeCookies;

    };

    this.login_nickName = function() {
        var login_nickName = element(by.id("login-nickname-ctl00$cphHeader$ctl00"));
        expect(login_nickName.isPresent()).toBe(true,'Login Email input box Not found');
        return login_nickName;

    };

    this.login_password = function() {
        var login_password = element(by.id("login-password"));
        expect(login_password.isPresent()).toBe(true,'Login Password input box Not found');
        return login_password;

    };

    this.login_clickLogIn  = function() {
        var login_clickLogIn = element(by.css("button.btn.btn--primary"));
        expect(login_clickLogIn.isPresent()).toBe(true,'Log In Button Not found');
        return login_clickLogIn;
    };

    this.forgotPassword_link = function(value) {
        element(by.xpath("//login-page/div/div/form/div[3]/div[2]/a/span")).click();
    };

    this.login_requestALiveDemo  = function() {
        element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[5]/a/span")).click();
    };

    this.login_signInText = function(value) {
        return element(by.xpath("//login-page/div/div[1]/h1[1]")).getText();
    };

    //**************************************** Login Elements***************************************************//

    this.login_Element_SignIn = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/h1[1]"));
    };

    this.login_Element_Close = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/a"));
    };

    this.login_Element_UserName = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[1]/input"));
    };

    this.login_Element_Password = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[2]/input"));
    };

    this.login_Element_RememberMe = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[3]/div[1]/span/label"));
    };

    this.login_Element_ForgotPassword = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[3]/div[2]/a/span"));
    };

    this.login_Element_SignInButtonLink = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[4]/button"));
    };

    this.login_Element_RequestForADemo = function() {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[5]/a/span"));
    };




    //****************************************Invalid Login***************************************************//

    this.invalidCredentials_userName = function(value) {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[1]/p")).getText();
    };

    this.invalidCredentials_Password = function(value) {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/form/div[2]/p")).getText();
    };

    this.invalidCredentials_NoAccountExist = function(value) {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/div/p"));
    };

    this.invalidCredentials_InvalidPassword = function(value) {
        return element(by.xpath("//*[@id='header']/div/modal-dialog[1]/div[1]/login-page/div/div[1]/div/p")).getText();
    };


    //*************************** Forgot Password ***********************************//

    this.forgotPassword_clickCrossButton = function(value) {
        element(by.xpath("//forgot-password-page/div/a")).click();
    };
    this.forgotPassword_email = function(value) {
        element(by.xpath("//forgot-password-page/div/div/div/form/div/input")).sendKeys(value);
    };
    this.forgotPassword_clickCancel  = function() {
        element(by.xpath("//forgot-password-page/div/div/div/form/div[2]/button[1]")).click();
    };

    this.forgotPassword_clickSend  = function() {
        element(by.xpath("//forgot-password-page/div/div/div/form/div[2]/button[2]")).click();
    };

    this.forgotPassword_PleaseEnterYourUsername = function(value) {
        return element(by.xpath("//forgot-password-page/div/div[1]/div[1]/form/div[1]/p[2]")).getText();
    };

    this.forgotPassword_Header = function(value) {
        return element(by.xpath("//forgot-password-page/div/div[1]/div[1]/h1[1]")).getText();
    };


    ///////////////////////////////////Registration //////////////////////////////////

    this.registration_Header = function(value) {
        return element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/h2")).getText();
    };


    this.registration_close = function(value) {
        element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/button/span")).click();
    };

    this.registration_firstName = function(value) {
        element(by.xpath("//*[@id='first-name']")).sendKeys(value);
    };

    this.registration_lastName = function(value) {
        element(by.xpath("//*[@id='last-name']")).sendKeys(value);
    };

    this.registration_company = function(value) {
        element(by.xpath("//*[@id='signup-company']")).sendKeys(value);
    };

    this.registration_workEmail = function(value) {
        element(by.xpath("//*[@id='signup-email']")).sendKeys(value);
    };

    this.registration_telephoneNumber = function(value) {
        element(by.xpath("//*[@id='signup-tel']")).sendKeys(value);
    };

    this.registration_requestALiveDemo  = function() {
        element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/div/div/form/button")).click();

    };

    this.registration_firstName_CantEmpty = function(value) {
       return element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/div/div/form/div[1]/p")).getText()
    };

    this.registration_lastName_CantEmpty = function(value) {
        return element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/div/div/form/div[2]/p")).getText();
    };

    this.registration_Company_CantEmpty = function(value) {
        return element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/div/div/form/div[3]/p")).getText();
    };

    this.registration_WorkEmail_CantEmpty = function(value) {
        return element(by.xpath("//*[@id='demo-modal-content']/div[2]/div/section/div/div/div/div/div/form/div[4]/p")).getText();
    };

    this.registration_requestALiveDemo_SuccessMessgae  = function() {
        return element(by.xpath("//*[@id='post-826']/div/div[2]/div/div/div/p[1]")).getText();

    };




};
module.exports = new login_page();