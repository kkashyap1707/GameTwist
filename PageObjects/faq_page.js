/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var faq_page = function() {

    this.faq_ContactDetails = function() {
        var faq_ContactDetails =element(by.linkText("Slots"));
        expect(faq_ContactDetails.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return faq_ContactDetails;
    };

    this.faq_Topic = function() {
        var faq_Topic =element(by.linkText("Slots"));
        expect(faq_Topic.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return faq_Topic;
    };

    this.faq_CloseButton = function() {
        var faq_CloseButton =element(by.linkText("Slots"));
        expect(faq_CloseButton.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return faq_CloseButton;
    };

};
module.exports = new faq_page();