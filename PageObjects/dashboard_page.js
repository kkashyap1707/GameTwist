/**
 * Created by Keshav on 04/04/2017.
 */

var dashboard_page = function() {


    this.dashboard_Slots = function() {
        var dashboard_Slots =element(by.linkText("Slots"));
        expect(dashboard_Slots.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return dashboard_Slots;
    };

    this.dashboard_Bingo = function() {
        var dashboard_Bingo =element(by.linkText("Bingo"));
        expect(dashboard_Bingo.isPresent()).toBe(true,'Dashboard Bingo Element Not found');

        return dashboard_Bingo;
    };

    this.dashboard_Casino = function() {
        var dashboard_Casino =element(by.linkText("Casino"));
        expect(dashboard_Casino.isPresent()).toBe(true,'Dashboard Casino Element Not found');

        return dashboard_Casino;
    };

    this.dashboard_Poker = function() {
        var dashboard_Poker =element(by.linkText("Poker"));
        expect(dashboard_Poker.isPresent()).toBe(true,'Dashboard Poker Element Not found');

        return dashboard_Poker;
    };

    this.dashboard_Logout = function () {
        var dashboard_Logout = element(by.css("button.btn--link.js-logout"));
        expect(dashboard_Logout.isPresent()).toBe(true,'Logout Element Not found');

        return dashboard_Logout;
    };

    this.dashboard_Search = function () {
        var dashboard_Search = element(by.css("#ctl00_cphNavAndSearch_ctl01_gameSearch"));
        expect(dashboard_Search.isPresent()).toBe(true,'Search Box Element Not found');

        return dashboard_Search;
    };

    this.dashboard_Nickname = function () {
        var dashboard_Nickname = element(by.css("span.nickname"));
        expect(dashboard_Nickname.isPresent()).toBe(true,'Nickname Element Not found');

        return dashboard_Nickname;
    };




};
module.exports = new dashboard_page();