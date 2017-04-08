/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');


var skillGames_page = function() {

    this.skillGames_ArcadeGames = function() {
        var skillGames_ArcadeGames =element(by.linkText("Slots"));
        expect(skillGames_ArcadeGames.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_ArcadeGames;
    };

    this.skillGames_BoardGames = function() {
        var skillGames_BoardGames =element(by.linkText("Slots"));
        expect(skillGames_BoardGames.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_BoardGames;
    };

    this.skillGames_CardGames = function() {
        var skillGames_CardGames =element(by.linkText("Slots"));
        expect(skillGames_CardGames.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_CardGames;
    };

    this.skillGames_SportsGames = function() {
        var skillGames_SportsGames =element(by.linkText("Slots"));
        expect(skillGames_SportsGames.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_SportsGames;
    };

    this.skillGames_Casino = function() {
        var skillGames_Casino =element(by.linkText("Slots"));
        expect(skillGames_Casino.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_Casino;
    };

    this.skillGames_SearchGames = function() {
        var skillGames_SearchGames =element(by.linkText("Slots"));
        expect(skillGames_SearchGames.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_SearchGames;
    };

    this.skillGames_LastPlayed = function() {
        var skillGames_LastPlayed =element(by.linkText("Slots"));
        expect(skillGames_LastPlayed.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return skillGames_LastPlayed;
    };

};
module.exports = new skillGames_page();