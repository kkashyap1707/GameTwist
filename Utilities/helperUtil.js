/**
 * Created by Keshav on 04/04/17.
 */

var helperUtil = {},
     login_page = require('./../PageObjects/login_page.js'),

     JSONData_production = require('./../testData/testdata_production.json'),
     JSONData;

     //console.log('HOLA login page object received');//JSON.stringify(login_page));

     if (process.env.NODE_ENV === 'production') {
        JSONData = JSONData_production;
     }

     helperUtil.envInfo = function () {
        helperUtil.addEnvironment("Environment :: ",process.env.NODE_ENV);
        helperUtil.addEnvironment("URL :: ",JSONData.AutoTextList[0].BASE_URL);
     };

     helperUtil.addEnvironment = function (Name,Value) {
        allure.addEnvironment(Name, Value);
     };

     helperUtil.setDescription = function (description, type) {
        allure.description(description, type);
     };

     helperUtil.setFeature = function (feature) {
        allure.feature(feature);
     };

     helperUtil.setStory = function (story) {
        allure.story(story);
     };

     helperUtil.startStep = function (startStep) {
        allure.startSuite(startStep,helperUtil.getTodayDateAndTime());
     };

     helperUtil.addStep = function (StepInfo) {
        //console.log(StepInfo);
        allure.createStep(StepInfo, function(){
        })();
     };

     helperUtil.addStepsWithScreenshot = function (StepInfo) {
        allure.createStep(StepInfo, function () {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment(StepInfo, function () {return new Buffer(png, 'base64');}, 'image/png')();
            });
        })();
     };

     helperUtil.hoverToElement = function (hoverToElement) {
         browser.actions().mouseMove(hoverToElement).perform();
         return browser.actions()
             .mouseUp()
             .perform();
     };

     helperUtil.login = function (userName,password) {
        //console.log(JSON.stringify("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"+login_page));
        login_page.login_nickName().sendKeys(userName);
        browser.driver.sleep(1500);
        login_page.login_password().sendKeys(password);
        browser.driver.sleep(1500);
        login_page.login_clickLogIn().click();
        browser.driver.sleep(7000);

     };

     helperUtil.Reporter_toBe = function (Expect, expectedResult, passMessage, failMessage) {
        expect(Expect).toBe(expectedResult);
        if(Expect === expectedResult){
            helperUtil.addStep(passMessage);
        }else{
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.ReporterElement = function (Expect,expectedResult,failMessage) {
        expect(Expect).toBe(expectedResult);
        if(Expect !== expectedResult){
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.Reporter_toEqual = function (Expect,expectedResult,passMessage,failMessage) {
        expect(Expect).toEqual(expectedResult);
        if(Expect === expectedResult){
            helperUtil.addStep(passMessage);
        }else{
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.Reporter_toBeTruthy = function (Expect,expectedResult,passMessage,failMessage) {
        expect(Expect).toBeTruthy();
        if(Expect === true){
            helperUtil.addStep(passMessage);
        }else{
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.Reporter_notToBe = function (Expect,expectedResult,passMessage,failMessage) {
        expect(Expect).not.toBe(expectedResult);
        if(Expect !== expectedResult){
            helperUtil.addStep(passMessage);
        }else{
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.Reporter_toContain = function (Expect,expectedResult,passMessage,failMessage) {
        expect(Expect).toContain(expectedResult);
        if(Expect === expectedResult){
            helperUtil.addStep(passMessage);
        }else{
            helperUtil.addStepsWithScreenshot(failMessage);
        }
     };

     helperUtil.waitForElement = function waitForElement ( _element ) {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.presenceOf(_element));
     };



     helperUtil.selectDropDownByNum = function (elem, optionNum ) {
        if (optionNum){
            elem.$$('option')
                .then(function(options){
                options[optionNum].click();
            });
        }
     };


     //Generate Random Email Address
     helperUtil.dummyEmailAddress = function () {
        var allowedChars = "abcdefghiklmnopqrstuvwxyz";
        var stringLength = 5;
        var randomstring = '';

        for (var i = 0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * allowedChars.length);
            randomstring += allowedChars.substring(rnum, rnum + 1);
        }
        // Append a domain name
        randomstring += "@yopmail.com";
        return randomstring;
     };


     //Function to generate random numbers
     helperUtil.randomNumber = function () {

        return Math.floor((Math.random() * 10) + 1);
     };

     //Function to generate x digit random numbers
     helperUtil.randomNumberPower = function (digit) {
        return Math.floor((Math.random() * Math.pow(10,digit)) + 1);
     };

     //Function to generate date in mm/dd/yyyy format
     helperUtil.getTodayDateAndTime = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var todayDate;
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        todayDate = mm + '/' + dd + '/' + yyyy;
        //console.log('Date is -- ' + todayDate);
        return todayDate;
     };

     //Function to generate date in mm/dd/yyyy format
     helperUtil.getDesiredDateObject = function (numberOfDays) {
        var desiredDate = new Date();

        desiredDate.setDate(desiredDate.getDate() + numberOfDays);
        desiredDate = new Date(desiredDate);

        return desiredDate;
     };


     //Function to generate date in mm/dd/yyyy format
     helperUtil.getDateAndTime = function (date) {
        if(!date){
            date = new Date();
        }
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var formattedDate;
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        formattedDate = mm + '/' + dd + '/' + yyyy;
        //console.log('Today date is -- ' + formattedDate);

        return formattedDate;
     };



module.exports = helperUtil;
