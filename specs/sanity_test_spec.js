/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util'),

    common_page = require('./../PageObjects/common_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),
    login_page = require('./../PageObjects/login_page.js'),

    helperUtil = require('./../Utilities/helperUtil'),

    JSONData_production = require('./../testData/testdata_production.json'),
    JSONData_QA = require('./../testData/testdata_QA.json'),

    JSONData;

    console.log("ENVIRONMENT IS :: "+process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'production') {
        JSONData = JSONData_production;
    }
    else if(process.env.NODE_ENV === 'QA'){
        JSONData = JSONData_QA;
    }


    describe('Sanity Test Cases', function () {

        describe('- Login Required', function () {

            beforeAll(function() {
                browser.ignoreSynchronization = true;
                browser.get(JSONData.AutoTextList[0].BASE_URL);

                login_page.login_closeCookies().click().then(function () {
                    helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);
                });
                browser
                    .getTitle().then(function(webpagetitle){
                    console.log(">>>>>>>>>>HOLA WEB_PAGE_TITLE :: "+webpagetitle);
                    expect(webpagetitle,'GameTwist Casino, Games & more | Play for Free','User Logged In Successfully','WebPage Title should be GameTwist Casino, Games & more | Play for Free');
                });
            });

            beforeEach(function () {
                browser.driver.sleep(1500);
                common_page.common_Logo().click();
                browser.driver.sleep(1500);
            });


            afterAll(function() {
                dashboard_page.dashboard_Nickname().click().then(function () {
                    browser.driver.sleep(1000);
                    dashboard_page.dashboard_Logout().click();
                });
            });

            it('Login Test Case ', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.envInfo();
                helperUtil.setDescription(" 1. Successful Login "+
                    " 2. Close any popups IF they appear. " +
                    " 3. Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation." +
                    " 4. Search for 'Slot on the website in the search games section." +
                    " 5. Count a number of shown games and select one of them (but not the first or last one)." +
                    " 6. Confirm that you are on the correct game page." +
                    " 7. Change the language from English to German." +
                    " 8. Successfully logout.");


                browser.driver.sleep(5000);

            });

            xit('Test Case Scenario ', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.envInfo();
                helperUtil.setDescription("1. Successful Login " +
                    "2. Close any popups IF they appear. " +
                    "3. Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation." +
                    "4. Search for 'Slot on the website in the search games section." +
                    "5. Count a number of shown games and select one of them (but not the first or last one)." +
                    "6. Confirm that you are on the correct game page." +
                    "7. Change the language from English to German." +
                    "8. Successfully logout.");

                browser.driver.sleep(5000);
                dashboard_page.dashboard_Bingo().click();
                browser
                    .getTitle().then(function(bingoWebPageTitle){
                    console.log(">>>>>>>>>>HOLA BINGO :: "+bingoWebPageTitle);
                    helperUtil.Reporter_toBe(bingoWebPageTitle,'Free Bingo Games | Play now for Free at GameTwist','User redirected to Bingo page','WebPage Title should be Free Bingo Games | Play now for Free at GameTwist');

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Bingo().getText().then(function (bingo) {
                        helperUtil.Reporter_toBe(bingo,'Bingo',"Bingo Page found Successfully","Bingo not found in the list");
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Casino().click();
                browser
                    .getTitle().then(function(casinoWebPageTitle){
                    console.log(">>>>>>>>>>HOLA CASINO :: "+casinoWebPageTitle);
                    helperUtil.Reporter_toBe(casinoWebPageTitle,'Free Casino Games Online | Play for Free at GameTwist','User redirected to Casino page','WebPage Title should be Free Casino Games Online | Play for Free at GameTwist');

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Casino().getText().then(function (casino) {
                        helperUtil.Reporter_toBe(casino,'Casino',"Casino Page found Successfully","Casino not found in the list");
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Poker().click();
                browser
                    .getTitle().then(function(pokerWebPageTitle){
                    console.log(">>>>>>>>>>HOLA POKER :: "+pokerWebPageTitle);
                    helperUtil.Reporter_toBe(pokerWebPageTitle,'Poker Free Online Play | GameTwist Casino','User redirected to Poker page','WebPage Title should be Poker Free Online Play | GameTwist Casino');

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Poker().getText().then(function (poker) {
                        helperUtil.Reporter_toBe(poker,'Poker',"Poker Page found Successfully","Poker not found in the list");
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Slots().click();
                browser
                    .getTitle().then(function(slotsWebPageTitle){
                    console.log(">>>>>>>>>>HOLA SLOTS :: "+slotsWebPageTitle);
                    helperUtil.Reporter_toBe(slotsWebPageTitle,'Free Slot Games online | Play for Free at GameTwist','User redirected to Slots page','WebPage Title should be Free Slot Games online | Play for Free at GameTwist');

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Slots().getText().then(function (slots) {
                        helperUtil.Reporter_toBe(slots,'Slots',"Slots Page found Successfully","Slots is not found in the list");
                        browser.driver.sleep(5000);
                    });
                });

                common_page.common_Search().sendKeys('Slot');
                browser.driver.sleep(9000);
            });

        });
    });
