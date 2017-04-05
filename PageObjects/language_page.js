/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var language_page = function() {

    this.language_English = function() {
        var language_English =element(by.linkText(""));
        expect(language_English.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_English;
    };

    this.language_Dutch = function() {
        var language_Dutch =element(by.linkText(""));
        expect(language_Dutch.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_Dutch;
    };

    this.language_Spanish = function() {
        var language_Spanish =element(by.linkText(""));
        expect(language_Spanish.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_Spanish;
    };

    this.language_Polish = function() {
        var language_Polish =element(by.linkText(""));
        expect(language_Polish.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_Polish;
    };

    this.language_Portuguese = function() {
        var language_Portuguese =element(by.linkText(""));
        expect(language_Portuguese.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_Portuguese;
    };

    this.language_Italian = function() {
        var language_Italian =element(by.linkText(""));
        expect(language_Italian.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_Italian;
    };

    this.language_French = function() {
        var language_French =element(by.linkText(""));
        expect(language_French.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return language_French;
    };

};
module.exports = new language_page();