/**
 * Created by Keshav on 04/04/2017.
 */


var login_page = function() {

    this.login_closeCookies = function() {
        var login_closeCookies = element(by.xpath("/html/body/form/div[3]/article/div/button"));
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
        var login_clickLogIn = element(by.xpath("//div[@id='branding__login']/div/fieldset/div[5]/div/button"));
        expect(login_clickLogIn.isPresent()).toBe(true,'Log In Button Not found');
        return login_clickLogIn;

    };

};
module.exports = new login_page();