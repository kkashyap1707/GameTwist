/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var bingo_page = function() {

    this.bingo_FilterByLines = function() {
        var bingo_FilterByLines =element(by.linkText("Slots"));
        expect(bingo_FilterByLines.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return bingo_FilterByLines;
    };

    this.bingo_FilterByThemes = function() {
        var bingo_FilterByThemes =element(by.linkText("Slots"));
        expect(bingo_FilterByThemes.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return bingo_FilterByThemes;
    };

};
module.exports = new bingo_page();