/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var myLevel_page = function() {

    this.dashboard_Slots = function() {
        var dashboard_Slots =element(by.linkText("Slots"));
        expect(dashboard_Slots.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return dashboard_Slots;
    };
};
module.exports = new myLevel_page();