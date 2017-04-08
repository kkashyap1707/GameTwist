/**
 * Created by Keshav on 04/04/2017.
 */

var util = require('util'),
    login_page = require('./../PageObjects/login_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),

    helperUtil = require('./../Utilities/helperUtil'),

    JSONData_production = require('./../testData/testdata_production.json'),
    JSONData_QA = require('./../testData/testdata_QA.json'),
    JSONData,JSONLang;


    console.log("ENVIRONMENT IS :: "+process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'production') {
        JSONData = JSONData_production;
    }
    else if(process.env.NODE_ENV === 'QA'){
        JSONData = JSONData_QA;
    }

    console.log(JSONData.AutoTextList[0].BASE_URL);

    describe('Test Login Flow ', function () {

        //Test Case 1 : Check Successful Login
        it('Successful Login', function () {

            helperUtil.setFeature('Practical task');
            helperUtil.setStory('In this case, all the test steps performed individually');
            helperUtil.envInfo();
            helperUtil.setDescription("1. Successful Login ");

            //Set True for Non-angular Page
            browser.ignoreSynchronization = true;

            //Launch the browser and navigate to page
            browser.get(JSONData.AutoTextList[0].BASE_URL);

            //Check for cookies on the page
            login_page.login_closeCookies().isPresent().then(function (isDisplayed){

                if(isDisplayed === true) {
                    helperUtil.addStep("Cookies displayed on the page");

                    //Login Steps
                    login_page.login_closeCookies().click().then(function () {
                        helperUtil.addStep("Cookies closed successfully");
                        browser.driver.sleep(3000);
                        helperUtil.addStep("Nickname is :: "+JSONData.AutoTextList[0].NickName);
                        helperUtil.addStep("Password is :: "+JSONData.AutoTextList[0].Password);
                        helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);
                        browser.driver.sleep(3000);
                        helperUtil.addStep("Login Successfully");

                        //Get Current URL
                        browser.getCurrentUrl().then(function (currentURL) {
                            JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                        });

                        //Validate Login
                        dashboard_page.dashboard_Nickname().getText().then(function (validateLogin) {
                            helperUtil.Reporter_toBe(validateLogin,JSONData.AutoTextList[0].NickName,"User Logged In Successfully and Nickname is ::"+validateLogin,"User not Logged In Successfully");
                        });
                    });


                }
                else {

                    //Login Steps
                    helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);

                    //Get Current URL
                    browser.getCurrentUrl().then(function (currentURL) {
                        JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                    });

                    //Validate Login
                    dashboard_page.dashboard_Nickname().getText().then(function (validateLogin) {
                        helperUtil.Reporter_toBe(validateLogin,JSONData.AutoTextList[0].NickName,"User Logged In Successfully and Nickname is ::"+validateLogin,"User not Logged In Successfully");
                    });
                }
            });
        });


});

