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
    
};
module.exports = new common_page();