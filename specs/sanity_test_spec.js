/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util'),

    login_page = require('./../PageObjects/login_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),
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
            //isAngularSite(false);

            login_page.login_closeCookies().click().then(function () {
                helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);
            });
            browser
                .getTitle().then(function(webpagetitle){
                console.log(">>>>>>>>>>HOLA WEB_PAGE_TITLE :: "+webpagetitle);
                expect(webpagetitle,'Insight360.io','User Logged In Successfully','WebPage Title should be Insight360.io');

            });
        });

        beforeEach(function () {
            dashboard_page.dashboard_Logo().click();
            browser.driver.sleep(1500);
        });


        /*afterEach(function() {
            //helperUtil.addStep("Keshav");
        });*/

        it('Login Test Case ', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);


        });

        it('Login Test Case Bingo ', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Bingo().click();
            browser
                .getTitle().then(function(webpagetitle){
                console.log(">>>>>>>>>>HOLA BINGO :: "+webpagetitle);
                helperUtil.Reporter_toBe(webpagetitle,'Free Bingo Games | Play now for Free at GameTwist','User Logged In Successfully','WebPage Title should be Insight360.io');

            });
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Bingo().getText().then(function (bingo) {
                helperUtil.Reporter_toBe(bingo,'Bingo',"Bingo found Successfully","Bingo is not found in the list");
                browser.driver.sleep(5000);
            });
        });

        xit('Login Test Case Poker', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Poker().click().then(function () {
                browser.driver.sleep(5000);
                helperUtil.addStepsWithScreenshot('Poker');
            });
        });

        xit('Login Test Case Casino', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Casino().click().then(function () {
                browser.driver.sleep(5000);
                helperUtil.addStepsWithScreenshot('Casino');
                    });
            });
        });

    });
