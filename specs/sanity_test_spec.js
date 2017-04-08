/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util'),

    commonItems_page = require('./../PageObjects/commonItems_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),
    language_page = require('./../PageObjects/language_page.js'),
    login_page = require('./../PageObjects/login_page.js'),
    slots_page = require('./../PageObjects/slots_page.js'),


    helperUtil = require('./../Utilities/helperUtil'),

    JSONData_production = require('./../testData/testdata_production.json'),
    JSONData_QA = require('./../testData/testdata_QA.json'),
    JSONData;


    var JSONLang;
    var gameToBeClicked;

    console.log("ENVIRONMENT IS :: "+process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'production') {
        JSONData = JSONData_production;
    }
    else if(process.env.NODE_ENV === 'QA'){
        JSONData = JSONData_QA;
    }


    describe('Assessment_task', function () {

        //First approach
        describe('- Approach_1', function () {

            //Before All Section
            beforeAll(function() {
                browser.ignoreSynchronization = true;
                browser.get(JSONData.AutoTextList[0].BASE_URL);

                login_page.login_closeCookies().click().then(function () {
                    helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);

                    browser.getCurrentUrl().then(function (currentURL) {
                        JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                        commonItems_page.commonItems_DailyBonus().isPresent().then(function (isDisplayed){

                            if(isDisplayed === true) {
                                commonItems_page.commonItems_DailyBonus().click();
                            }
                            else{
                                console.log('No Daily Bonus Pop-up found');
                            }
                        });
                    });
                });
            });

            //Before Each Section
            beforeEach(function () {
                browser.driver.sleep(1500);
                commonItems_page.commonItems_Logo().click();
                browser.driver.sleep(1500);
            });

            //After All Section
            afterAll(function() {
                dashboard_page.dashboard_Nickname().click().then(function () {
                    browser.driver.sleep(3000);
                    dashboard_page.dashboard_Logout().click();
                });
            });

            //Test Case starts here
            it('Test Case Scenario ', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, Login and Logout actions performed in BeforeAll and AfterAll section respectively');
                helperUtil.envInfo();
                helperUtil.setDescription("1. Successful Login " +
                    "2. Close any popups IF they appear. " +
                    "3. Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation." +
                    "4. Search for 'Slot on the website in the search games section." +
                    "5. Count a number of shown games and select one of them (but not the first or last one)." +
                    "6. Confirm that you are on the correct game page." +
                    "7. Change the language from English to German." +
                    "8. Successfully logout.");

                browser.getTitle().then(function(webPageTitle){

                    //Validate Login
                    dashboard_page.dashboard_Nickname().getText().then(function (validateLogin) {
                        helperUtil.Reporter_toBe(validateLogin,JSONData.AutoTextList[0].NickName,"User Logged In Successfully and Nickname is ::"+validateLogin,"User not Logged In Successfully");
                        browser.driver.sleep(5000);
                    });

                    //Access Bingo Section
                    dashboard_page.dashboard_Bingo().click().then(function () {
                        helperUtil.addStep("User clicked on Bingo tab");
                    });

                    browser.getTitle().then(function(bingoWebPageTitle){

                        //Validate Bingo Page
                        browser.getCurrentUrl().then(function (currentURL) {
                            var currentPageValidation = currentURL.split('/')[5];
                            helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                            //Validate Bingo WebPage Title
                            helperUtil.Reporter_toBe(bingoWebPageTitle,JSONLang.AutoTextList[0].BingoPageTitle,' Bingo page validated Successfully :: '+bingoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].BingoPageTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    //Access Casino section
                    dashboard_page.dashboard_Casino().click().then(function () {
                        helperUtil.addStep("User clicked on Casino tab");
                    });

                    browser.getTitle().then(function(casinoWebPageTitle){

                        //Validate Casino Page
                        browser.getCurrentUrl().then(function (currentURL) {
                            var currentPageValidation = currentURL.split('/')[5];
                            helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                            //Validate Casino WebPage Title
                            helperUtil.Reporter_toBe(casinoWebPageTitle,JSONLang.AutoTextList[0].CasinoPageTitle,'Casino page validated Successfully :: '+casinoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].CasinoPageTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    //Access Poker section
                    dashboard_page.dashboard_Poker().click().then(function () {
                        helperUtil.addStep("User clicked on Poker tab");
                    });

                    browser.getTitle().then(function(pokerWebPageTitle){

                        //Validate Poker Page
                        browser.getCurrentUrl().then(function (currentURL) {
                            var currentPageValidation = currentURL.split('/')[5];
                            helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                            //Validate Poker WebPage Title
                            helperUtil.Reporter_toBe(pokerWebPageTitle,JSONLang.AutoTextList[0].PokerPageTitle,'Poker page validated Successfully :: '+pokerWebPageTitle ,'WebPage Title should be '+JSONLang.AutoTextList[0].PokerPageTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    //Access Slots section
                    dashboard_page.dashboard_Slots().click().then(function () {
                        helperUtil.addStep("User clicked on Slots tab");
                    });

                    browser.getTitle().then(function(slotsWebPageTitle){

                        //Validate Slots Page
                        browser.getCurrentUrl().then(function (currentURL) {
                            var currentPageValidation = currentURL.split('/')[5];
                            helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                            //Validate Slots WebPage Title
                            helperUtil.Reporter_toBe(slotsWebPageTitle,JSONLang.AutoTextList[0].SlotPageTitle,'Slots page validated Successfully :: '+slotsWebPageTitle ,'WebPage Title should be '+JSONLang.AutoTextList[0].SlotPageTitle);
                            browser.driver.sleep(5000);

                            //Search
                            commonItems_page.commonItems_Search().sendKeys(JSONLang.AutoTextList[0].SearchText);
                            helperUtil.addStep("User searched for search text :: "+ " ' "+JSONLang.AutoTextList[0].SearchText + " ' ");
                            browser.driver.sleep(9000);
                        });
                    });
                });

                //Search List
                commonItems_page.commonItems_Search_list().count().then(function(SearchResultCount) {
                    helperUtil.addStep("Total Search Result Count is :: "+SearchResultCount);

                    var searchIndex = JSONData.AutoTextList[0].SearchIndex;

                    if (SearchResultCount > 0 && SearchResultCount >= searchIndex)
                    {
                        var gameToBeClicked = commonItems_page.commonItems_Search_list().get(searchIndex-1);
                        gameToBeClicked.getText().then(function (searchedGameName) {
                            helperUtil.addStep("User searched for "+searchIndex+"nd search result :: " + searchedGameName);
                            gameToBeClicked.click().then(function () {
                                browser.getCurrentUrl().then(function (currentURL) {
                                    helperUtil.addStep("User Redirected to :: "+currentURL);
                                    browser.driver.sleep(5000);

                                    slots_page.slots_Search_Results().getText().then(function (searchResultValidation) {
                                        helperUtil.Reporter_toBe(searchResultValidation,searchedGameName,"User is on correct game page :: "+searchResultValidation ,"User is not on correct game page");
                                    });
                                });
                            });
                        });
                    }
                    else
                    {
                        helperUtil.addStep(JSONLang.AutoTextList[0].SearchNoGamesFoundText);
                    }
                });

                //Click on HomePage Icon
                commonItems_page.commonItems_Logo().click();
                browser.driver.sleep(5000);

                //Get Current URL and Language
                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Current URL is :: " + currentURL);
                    helperUtil.addStep("Current Language is :: " + currentURL.split('/')[3]);
                });

                //Change the Language from English to German
                commonItems_page.commonItems_LanguageDropDown().click();
                browser.driver.sleep(5000);

                //Select German Language
                language_page.language_German_De().click().then(function () {
                    helperUtil.addStep("User changed the language to German");
                    browser.driver.sleep(5000);
                });

                //Validated updated URL and Language
                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Updated URL is :: " + currentURL);
                    helperUtil.addStep("Updated Language is :: " + currentURL.split('/')[3]);

                    //Restore the German Language to English
                    commonItems_page.commonItems_LanguageDropDown().click().then(function () {
                        browser.driver.sleep(5000);
                        language_page.language_English_En().click();
                        browser.driver.sleep(5000);
                    });

                });
            });
        });

        //Second approach
        describe('- Approach_2', function () {

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

            //Test Case 2 : Close any popups IF they appear
            it('Close any popups IF they appear', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("2. Close any popups IF they appear" );

                //Check for Daily Bonus Pop-up
                commonItems_page.commonItems_DailyBonus().isPresent().then(function (isDisplayed){
                    if(isDisplayed === true) {
                        //Close Pop-up
                        commonItems_page.commonItems_DailyBonus().click();
                        helperUtil.addStep("Daily Bonus pop-up closed successfully");
                    }
                    else{
                        //No Pop-up found
                        helperUtil.addStep("No Daily Bonus pop-up found");
                    }
                });
            });

            //Test Case 3 : Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation.
            it('Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("3. Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation." );

                browser.driver.sleep(5000);

                //Access 'Bingo' tab
                dashboard_page.dashboard_Bingo().click().then(function () {
                    helperUtil.addStep("User clicked on Bingo tab");
                });

                //Validate Bingo WebPage
                browser.getTitle().then(function(bingoWebPageTitle){

                    //Validate Bingo Page
                    browser.getCurrentUrl().then(function (currentURL) {
                        var currentPageValidation = currentURL.split('/')[5];
                        helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                        //Validate Bingo WebPage Title
                        helperUtil.Reporter_toBe(bingoWebPageTitle,JSONLang.AutoTextList[0].BingoPageTitle,'Bingo Page validated Successfully :: '+ bingoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].BingoPageTitle);
                        browser.driver.sleep(5000);
                    });
                });

                //Access 'Casino' tab
                dashboard_page.dashboard_Casino().click().then(function () {
                    helperUtil.addStep("User clicked on Casino tab");
                });

                //Validate Casino WebPage
                browser.getTitle().then(function(casinoWebPageTitle){

                    //Validate Casino Page
                    browser.getCurrentUrl().then(function (currentURL) {
                        var currentPageValidation = currentURL.split('/')[5];
                        helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                        //Validate Casino WebPage Title
                        helperUtil.Reporter_toBe(casinoWebPageTitle,JSONLang.AutoTextList[0].CasinoPageTitle,'Casino Page validated Successfully :: '+ casinoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].CasinoPageTitle);
                        browser.driver.sleep(5000);
                    });
                });

                //Access 'Poker' tab
                dashboard_page.dashboard_Poker().click().then(function () {
                    helperUtil.addStep("User clicked on Poker tab");
                });

                //Validate 'Poker' WebPage
                browser.getTitle().then(function(pokerWebPageTitle){

                    //Validate 'Poker' Page
                    browser.getCurrentUrl().then(function (currentURL) {
                        var currentPageValidation = currentURL.split('/')[5];
                        helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                        //Validate 'Poker' WebPage Title
                        helperUtil.Reporter_toBe(pokerWebPageTitle,JSONLang.AutoTextList[0].PokerPageTitle,'Poker Page validated Successfully :: '+ pokerWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].PokerPageTitle);
                        browser.driver.sleep(5000);
                    });
                });

                //Access 'Slots' tab
                dashboard_page.dashboard_Slots().click().then(function () {
                    helperUtil.addStep("User clicked on Slots tab");
                });

                //Validate 'Slots' WebPage
                browser.getTitle().then(function(slotsWebPageTitle){

                    //Validate 'Slots' Page
                    browser.getCurrentUrl().then(function (currentURL) {
                        var currentPageValidation = currentURL.split('/')[5];
                        helperUtil.addStepsWithScreenshot("Current page is of :: " + currentURL.split('/')[5]);

                        //Validate 'Slots' WebPage Title
                        helperUtil.Reporter_toBe(slotsWebPageTitle,JSONLang.AutoTextList[0].SlotPageTitle,'Slots Page validated Successfully :: '+ slotsWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].SlotPageTitle);
                        browser.driver.sleep(5000);
                    });
                });
            });

            //Test Case 4 : Search for 'Slot' on the website in the search games section
            it('Search for Slot on the website in the search games section', function () {
                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("4. Search for Slot on the website in the search games section" );

                //Search for 'Slot'
                commonItems_page.commonItems_Search().sendKeys(JSONLang.AutoTextList[0].SearchText);
                helperUtil.addStep("User searched for search text :: "+ " ' "+JSONLang.AutoTextList[0].SearchText + " ' ");
                browser.driver.sleep(9000);
            });

            //Test Case 5 : Count a number of shown games and select one of them (but not the first or last one).
            it('Count a number of shown games and select one of them (but not the first or last one).', function () {
                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("5. Count a number of shown games and select one of them (but not the first or last one)." );

                //Search result list
                commonItems_page.commonItems_Search_list().count().then(function(SearchResultCount) {

                    //Total search result count
                    helperUtil.addStep("Total Search Result Count is :: "+SearchResultCount);

                    var searchIndex = JSONData.AutoTextList[0].SearchIndex;

                    if (SearchResultCount > 0 && SearchResultCount >= searchIndex)
                    {
                        gameToBeClicked = commonItems_page.commonItems_Search_list().get(searchIndex-1);
                        gameToBeClicked.getText().then(function (searchedGameName) {
                            helperUtil.addStep("User searched for "+searchIndex+"nd search result :: " + searchedGameName);
                        });
                    }
                    else
                    {
                        //No games found
                        helperUtil.addStep(JSONLang.AutoTextList[0].SearchNoGamesFoundText);
                    }
                });
            });

            //Test Case 6 : Confirm that you are on the correct game page.
            it('Confirm that you are on the correct game page.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("6. Confirm that you are on the correct game page." );

                //Get text for search result
                gameToBeClicked.getText().then(function (searchedGameName) {
                    helperUtil.addStep("User searched for :: "+searchedGameName);

                    //Click on Search result
                    gameToBeClicked.click().then(function () {

                        //Get current url of search result
                        browser.getCurrentUrl().then(function (currentURL) {
                            helperUtil.addStep("User Redirected to :: "+currentURL);
                            browser.driver.sleep(5000);

                            slots_page.slots_Search_Results().getText().then(function (searchResultValidation) {
                                helperUtil.Reporter_toBe(searchResultValidation,searchedGameName,"User is on correct game page :: "+searchResultValidation ,"User is not on correct game page");
                            });
                        });
                    });
                });
            });

            //Test Case 7 : Change the language from English to German.
            it('Change the language from English to German.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("7. Change the language from English to German." );

                //Click on HomePage Icon
                commonItems_page.commonItems_Logo().click();
                browser.driver.sleep(5000);

                //Check Current URL and Language
                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Current URL is :: " + currentURL);
                    helperUtil.addStep("Current Language is :: " + currentURL.split('/')[3]);

                });

                //Change the Language from English to German
                commonItems_page.commonItems_LanguageDropDown().click();
                browser.driver.sleep(5000);

                //Select German Language
                language_page.language_German_De().click().then(function () {
                    helperUtil.addStep("User changed the language to German");
                    browser.driver.sleep(5000);
                });

                //Validated updated URL and Language
                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Updated URL is :: " + currentURL);
                    helperUtil.addStep("Updated Language is :: " + currentURL.split('/')[3]);

                    //Restore the German Language to English
                    commonItems_page.commonItems_LanguageDropDown().click();
                    browser.driver.sleep(5000);
                    language_page.language_English_En().click();
                });
            });

            //Test Case 8 : Successful Logout
            it('Successful Logout', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("8. Successful Logout" );

                //Click on HomePage Icon
                commonItems_page.commonItems_Logo().click();
                browser.driver.sleep(5000);

                //Click on Nickname
                dashboard_page.dashboard_Nickname().click().then(function () {
                    browser.driver.sleep(5000);

                    //Click on Logout
                    dashboard_page.dashboard_Logout().click();
                    browser.driver.sleep(5000);
                    helperUtil.addStep('Successfully logout.');
                });
            });

        });

    });