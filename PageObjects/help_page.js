/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var help_page = function() {

    this.help_SearchBox = function() {
        var help_SearchBox =element(by.linkText("Slots"));
        expect(help_SearchBox.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return help_SearchBox;
    };
};
module.exports = new help_page();