/**
 * Created by Keshav on 04/04/2017.
 */

var dashboard_page = function() {


    this.dashboard_Slots = function() {
        var dashboard_Slots =element(by.xpath("//nav[@id='navigation-main']/ul/li[1]/a"));
        expect(dashboard_Slots.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return dashboard_Slots;
    };

    this.dashboard_Bingo = function() {
        var dashboard_Bingo =element(by.xpath("//nav[@id='navigation-main']/ul/li[2]/a"));
        expect(dashboard_Bingo.isPresent()).toBe(true,'Dashboard Bingo Element Not found');

        return dashboard_Bingo;
    };

    this.dashboard_Casino = function() {
        var dashboard_Casino =element(by.xpath("//nav[@id='navigation-main']/ul/li[3]/a"));
        expect(dashboard_Casino.isPresent()).toBe(true,'Dashboard Casino Element Not found');

        return dashboard_Casino;
    };

    this.dashboard_Poker = function() {
        var dashboard_Poker =element(by.xpath("//nav[@id='navigation-main']/ul/li[4]/a"));
        expect(dashboard_Poker.isPresent()).toBe(true,'Dashboard Poker Element Not found');

        return dashboard_Poker;
    };

    this.dashboard_Logout = function () {
        var dashboard_Logout = element(by.css("button.btn--link.js-logout"));
        expect(dashboard_Logout.isPresent()).toBe(true,'Logout Element Not found');

        return dashboard_Logout;
    };

    this.dashboard_Nickname = function () {
        var dashboard_Nickname = element(by.css("span.nickname"));
        expect(dashboard_Nickname.isPresent()).toBe(true,'Nickname Element Not found');

        return dashboard_Nickname;
    };




};
module.exports = new dashboard_page();