/**
 * Created by Keshav on 04/05/2017.
 */

var common_page = function() {


    this.common_Logo = function () {
        var common_Logo = element(by.css("a.branding__logo"));
        expect(common_Logo.isPresent()).toBe(true,'Dashboard Logo Element Not found');

        return common_Logo;
    };

    this.common_Search = function () {
        var common_Search = element(by.css("#ctl00_cphNavAndSearch_ctl01_gameSearch"));
        expect(common_Search.isPresent()).toBe(true,'Search Box Element Not found');

        return common_Search;
    };

    this.common_Search_list = function () {
        var common_Search = element.all(by.css("#aspnetForm > div.page > div.header-and-content > div.nav-and-search > div > ul > li.js-game-item"));

        return common_Search;
    };

    this.common_Search_NoGamesFound = function () {
        var common_Search_NoGamesFound = element(by.css("#aspnetForm > div.page > div.header-and-content > div.nav-and-search > div > ul > li"));
        expect(common_Search_NoGamesFound.isPresent()).toBe(true,'Search Box No Games Found Element Not found');

        return common_Search_NoGamesFound;
    };

    this.common_LanguageDropDown = function () {
        var common_LanguageDropDown = element(by.css("i.icon-arrow-down"));
        expect(common_LanguageDropDown.isPresent()).toBe(true,'Language Drop-Down Element Not found');

        return common_LanguageDropDown;
    };

};
module.exports = new common_page();