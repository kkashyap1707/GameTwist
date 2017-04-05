/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var notification_page = function() {

    this.notification_Confirm = function() {
        var notification_Confirm =element(by.linkText("Slots"));
        expect(notification_Confirm.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return notification_Confirm;
    };

    this.notification_OK = function() {
        var notification_OK =element(by.linkText("Slots"));
        expect(notification_OK.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return notification_OK;
    };

    this.notification_Count = function() {
        var notification_Count =element(by.linkText("Slots"));
        expect(notification_Count.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return notification_Count;
    };
};
module.exports = new notification_page();