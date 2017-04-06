/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util');
var helperUtil = require('./../Utilities/helperUtil');

var language_page = function() {

    this.language_Czech_Cs = function() {
        var language_Czech_Cs =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li/a"));
        expect(language_Czech_Cs.isPresent()).toBe(true,'Czech Language Element Not found');

        return language_Czech_Cs;
    };

    this.language_German_De = function() {
        var language_German_De =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[2]/a"));
        expect(language_German_De.isPresent()).toBe(true,'German Language Element Not found');

        return language_German_De;
    };

    this.language_Greek_El = function() {
        var language_Greek_El =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[5]/a"));
        expect(language_Greek_El.isPresent()).toBe(true,'Greek Language Element Not found');

        return language_Greek_El;
    };

    this.language_English_En = function() {
        var language_English_En =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[3]/a"));
        expect(language_English_En.isPresent()).toBe(true,'English Language Element Not found');

        return language_English_En;
    };

    this.language_Spanish_Es = function() {
        var language_Spanish_Es =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[4]/a"));
        expect(language_Spanish_Es.isPresent()).toBe(true,'Spanish Language Element Not found');

        return language_Spanish_Es;
    };

    this.language_French_Fr = function() {
        var language_French_Fr =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[6]/a"));
        expect(language_French_Fr.isPresent()).toBe(true,'French Language Element Not found');

        return language_French_Fr;
    };

    this.language_Hungarian_Hu = function() {
        var language_Hungarian_Hu =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[8]/a"));
        expect(language_Hungarian_Hu.isPresent()).toBe(true,'Hungarian Language Element Not found');

        return language_Hungarian_Hu;
    };

    this.language_Italian_It = function() {
        var language_Italian_It =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[7]/a"));
        expect(language_Italian_It.isPresent()).toBe(true,'Italian Language Element Not found');

        return language_Italian_It;
    };

    this.language_Polish_Pl = function() {
        var language_Polish_Pl =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[9]/a"));
        expect(language_Polish_Pl.isPresent()).toBe(true,'Polish Language Element Not found');

        return language_Polish_Pl;
    };

    this.language_Portuguese_Pt = function() {
        var language_Portuguese =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[10]/a"));
        expect(language_Portuguese.isPresent()).toBe(true,'Portuguese Language Element Not found');

        return language_Portuguese;
    };

    this.language_Russian_Ru = function() {
        var language_Russian_Ru =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[13]/a"));
        expect(language_Russian_Ru.isPresent()).toBe(true,'Russian Language Element Not found');

        return language_Russian_Ru;
    };

    this.language_Slovak_Sk = function() {
        var language_Slovak_Sk =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[11]/a"));
        expect(language_Slovak_Sk.isPresent()).toBe(true,'Slovak Language Element Not found');

        return language_Slovak_Sk;
    };

    this.language_Turkish_Tr = function() {
        var language_Turkish_Tr =element(by.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[5]/div/ul/li[12]/a"));
        expect(language_Turkish_Tr.isPresent()).toBe(true,'Turkish Language Element Not found');

        return language_Turkish_Tr;
    };


};
module.exports = new language_page();