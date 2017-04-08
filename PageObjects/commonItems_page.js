/**
 * Created by Keshav on 04/05/2017.
 */

var commonItems_page = function() {



    this.commonItems_DailyBonus = function () {
        var commonItems_DailyBonus = element(by.css("#daily-bonus-popup > div > div > div > span > a"));

        return commonItems_DailyBonus;
    };

    this.commonItems_Logo = function () {
        var commonItems_Logo = element(by.css("a.branding__logo"));
        expect(commonItems_Logo.isPresent()).toBe(true,'GameTwist Logo Element Not found');

        return commonItems_Logo;
    };

    this.commonItems_Search = function () {
        var commonItems_Search = element(by.css("#ctl00_cphNavAndSearch_ctl01_gameSearch"));
        expect(commonItems_Search.isPresent()).toBe(true,'Search Box Element Not found');

        return commonItems_Search;
    };

    this.commonItems_Search_list = function () {
        var commonItems_Search_list = element.all(by.css("#aspnetForm > div.page > div.header-and-content > div.nav-and-search > div > ul > li.js-game-item"));

        return commonItems_Search_list;
    };

    this.commonItems_Search_NoGamesFound = function () {
        var commonItems_Search_NoGamesFound = element(by.css("#aspnetForm > div.page > div.header-and-content > div.nav-and-search > div > ul > li"));
        expect(commonItems_Search_NoGamesFound.isPresent()).toBe(true,'Search Box No Games Found Element Not found');

        return commonItems_Search_NoGamesFound;
    };

    this.commonItems_LanguageDropDown = function () {
        var commonItems_LanguageDropDown = element(by.xpath("//*[@id='branding']/div[2]/div[1]/div[4]/ul/li[5]/div[1]/span/i"));
        expect(commonItems_LanguageDropDown.isPresent()).toBe(true,'Language Drop-Down Element Not found');

        return commonItems_LanguageDropDown;
    };

    this.commonItems_Help = function () {
        var commonItems_Search = element(by.css("#ctl00_cphNavAndSearch_ctl01_gameSearch"));
        expect(commonItems_Search.isPresent()).toBe(true,'Search Box Element Not found');

        return commonItems_Search;
    };

    this.commonItems_FAQ = function () {
        var commonItems_Search = element(by.css("#ctl00_cphNavAndSearch_ctl01_gameSearch"));
        expect(commonItems_Search.isPresent()).toBe(true,'Search Box Element Not found');

        return commonItems_Search;
    };

};
module.exports = new commonItems_page();