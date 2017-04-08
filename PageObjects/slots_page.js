/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var slots_page = function() {

    this.slots_FindYourGame = function() {
        var slots_FindYourGame = element(by.linkText("Slots"));
        expect(slots_FindYourGame.isPresent()).toBe(true,'Find Your Game Element Not found');

        return slots_FindYourGame;
    };

    this.slots_FilterByLines = function() {
        var slots_FilterByLines = element(by.linkText("Slots"));
        expect(slots_FilterByLines.isPresent()).toBe(true,'Filter By Lines Element Not found');

        return slots_FilterByLines;
    };

    this.slots_FilterByThemes = function() {
        var slots_FilterByThemes = element(by.linkText("Slots"));
        expect(slots_FilterByThemes.isPresent()).toBe(true,'Filter By Themes Element Not found');

        return slots_FilterByThemes;
    };

    this.slots_JustNewGames = function() {
        var slots_JustNewGames = element(by.linkText("Slots"));
        expect(slots_JustNewGames.isPresent()).toBe(true,'Just New Games Element Not found');

        return slots_JustNewGames;
    };

    this.slots_Results = function() {
        var slots_Results = element(by.linkText("Slots"));
        expect(slots_Results.isPresent()).toBe(true,'Results Element Not found');

        return slots_Results;
    };

    this.slots_Search_Results = function() {
        var slots_Results = element(by.css("#aspnetForm > div.page > div.header-and-content > div.bct > ol > li:nth-child(3)"));
        expect(slots_Results.isPresent()).toBe(true,'Slot Search Results Element Not found');

        return slots_Results;
    };





};
module.exports = new slots_page();