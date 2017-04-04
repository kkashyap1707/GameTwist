/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util'),

    login_page = require('./../PageObjects/login_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),
    helperUtil = require('./../Utilities/helperUtil'),

    JSONData_production = require('./../testData/testdata_production.json'),
    JSONData_production_nonsasb = require('./../testData/testdata_production_nonsasb.json'),

    JSONData;

console.log("ENVIRONMENT IS :: "+process.env.NODE_ENV);
console.log("USER TYPE IS ::"+process.env.NODE_USERTYPE);


if (process.env.NODE_ENV === 'production') {
    JSONData = JSONData_production;
}
else if(process.env.NODE_ENV === 'QA'){
    JSONData = JSONData_production_nonsasb;
}


describe('Sanity Test Cases', function () {

    describe('- Login Required', function () {

        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.get(JSONData.AutoTextList[0].BASE_URL);
            //isAngularSite(false);
            login_page.login_closeCookies().click().then(function () {
                helperUtil.addStepsWithScreenshot('scr1');
                login_page.login_nickName().sendKeys(JSONData.AutoTextList[0].NickName);
                browser.driver.sleep(1500);
                helperUtil.addStepsWithScreenshot('scr2');
                login_page.login_password().sendKeys(JSONData.AutoTextList[0].Password);
                browser.driver.sleep(1500);
                helperUtil.addStepsWithScreenshot('scr3');
                login_page.login_clickLogIn().click();
                helperUtil.addStepsWithScreenshot('scr4');
                browser.driver.sleep(7000);
            });
        });

        /*afterEach(function() {
            //helperUtil.addStep("Keshav");
        });*/

        xit('Login Test Case ', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);
        });

        it('Login Test Case Bingo ', function () {

            helperUtil.envInfo();
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Bingo().click();
            browser.driver.sleep(5000);
            dashboard_page.dashboard_Bingo().getText().then(function (bingo) {
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HOLA :: "+bingo);
                expect(bingo,'Bingo');
                helperUtil.Reporter(bingo,'Bingo',"Bingo found Successfully","Bingo is not found in the list");
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
