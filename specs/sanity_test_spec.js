/**
 * Created by Keshav on 04/04/2017.
 */


var util = require('util'),

    common_page = require('./../PageObjects/common_page.js'),
    dashboard_page = require('./../PageObjects/dashboard_page.js'),
    language_page = require('./../PageObjects/language_page.js'),
    login_page = require('./../PageObjects/login_page.js'),


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

        describe('- Approach_1', function () {

            beforeAll(function() {
                browser.ignoreSynchronization = true;
                browser.get(JSONData.AutoTextList[0].BASE_URL);

                login_page.login_closeCookies().click().then(function () {
                    helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);

                    browser.getCurrentUrl().then(function (currentURL) {
                        JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                        //console.log("Language is :: "+JSONLang.AutoTextList[0].Language);

                        common_page.common_DailyBonus().isPresent().then(function (isDisplayed){

                            if(isDisplayed === true) {
                                common_page.common_DailyBonus().click();
                            }
                            else{
                                console.log('No Daily Bonus Pop-up found');
                            }
                        });
                    });
                });
            });

            beforeEach(function () {
                browser.driver.sleep(1500);
                common_page.common_Logo().click();
                browser.driver.sleep(1500);
            });


            afterAll(function() {
                dashboard_page.dashboard_Nickname().click().then(function () {
                    browser.driver.sleep(3000);
                    dashboard_page.dashboard_Logout().click();
                });
            });

            it('Test Case Scenario ', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, Login and Logout actions performs in BeforeAll and AfterAll section respectively');
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
                    helperUtil.Reporter_toBe(webPageTitle,JSONLang.AutoTextList[0].HomePageTitle,'User Logged In Successfully','WebPage Title should be '+JSONLang.AutoTextList[0].HomePageTitle);

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Bingo().click();
                    browser.getTitle().then(function(bingoWebPageTitle){
                        helperUtil.Reporter_toBe(bingoWebPageTitle,JSONLang.AutoTextList[0].BingoPageTitle,' Bingo page found Successfully :: '+bingoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].BingoPageTitle);

                        browser.driver.sleep(5000);
                        dashboard_page.dashboard_Bingo().getText().then(function (bingo) {
                            helperUtil.Reporter_toBe(bingo,JSONLang.AutoTextList[0].BingoTitle,"User redirected to Bingo Page Successfully","Title Name should be "+JSONLang.AutoTextList[0].BingoTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    dashboard_page.dashboard_Casino().click();
                    browser.getTitle().then(function(casinoWebPageTitle){
                        helperUtil.Reporter_toBe(casinoWebPageTitle,JSONLang.AutoTextList[0].CasinoPageTitle,'Casino page found Successfully :: '+casinoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].CasinoPageTitle);

                        browser.driver.sleep(5000);
                        dashboard_page.dashboard_Casino().getText().then(function (casino) {
                            helperUtil.Reporter_toBe(casino,JSONLang.AutoTextList[0].CasinoTitle,"User redirected to Casino Page Successfully","Title Name should be "+JSONLang.AutoTextList[0].CasinoTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    dashboard_page.dashboard_Poker().click();
                    browser.getTitle().then(function(pokerWebPageTitle){
                         helperUtil.Reporter_toBe(pokerWebPageTitle,JSONLang.AutoTextList[0].PokerPageTitle,'Poker page found Successfully :: '+pokerWebPageTitle ,'WebPage Title should be '+JSONLang.AutoTextList[0].PokerPageTitle);

                        browser.driver.sleep(5000);
                        dashboard_page.dashboard_Poker().getText().then(function (poker) {
                            helperUtil.Reporter_toBe(poker,JSONLang.AutoTextList[0].PokerTitle,"User redirected to Poker Page Successfully","Title Name should be "+JSONLang.AutoTextList[0].PokerTitle);
                            browser.driver.sleep(5000);
                        });
                    });

                    dashboard_page.dashboard_Slots().click();
                    browser.getTitle().then(function(slotsWebPageTitle){
                        helperUtil.Reporter_toBe(slotsWebPageTitle,JSONLang.AutoTextList[0].SlotPageTitle,'Slots page found Successfully :: '+slotsWebPageTitle ,'WebPage Title should be '+JSONLang.AutoTextList[0].SlotPageTitle);

                        browser.driver.sleep(5000);
                        dashboard_page.dashboard_Slots().getText().then(function (slots) {
                            helperUtil.Reporter_toBe(slots,JSONLang.AutoTextList[0].SlotTitle,"User redirected to Slots Page Successfully","Title Name should be "+JSONLang.AutoTextList[0].SlotTitle);
                            browser.driver.sleep(5000);

                            common_page.common_Search().sendKeys(JSONLang.AutoTextList[0].SearchText);
                            helperUtil.addStep("User searched for search text :: "+ " ' "+JSONLang.AutoTextList[0].SearchText + " ' ");
                            browser.driver.sleep(9000);
                        });
                    });
                });

                common_page.common_Search_list().count().then(function(SearchResultCount) {
                    helperUtil.addStep("Total Search Result Count is :: "+SearchResultCount);

                    var searchIndex = JSONData.AutoTextList[0].SearchIndex;

                    if (SearchResultCount > 0 && SearchResultCount >= searchIndex)
                    {
                        var gameToBeClicked = common_page.common_Search_list().get(searchIndex-1);
                        gameToBeClicked.getText().then(function (searchedGameName) {
                            helperUtil.addStep("User searched for "+searchIndex+"nd search result :: " + searchedGameName);
                            gameToBeClicked.click().then(function () {
                                browser.getCurrentUrl().then(function (currentURL) {
                                    helperUtil.addStep("User Redirected to :: "+currentURL);
                                    browser.driver.sleep(5000);
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
                common_page.common_Logo().click();
                browser.driver.sleep(5000);

                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Current URL is :: " + currentURL);
                    helperUtil.addStep("Current Language is :: " + currentURL.split('/')[3]);
                });

                //Change the Language from English to German
                common_page.common_LanguageDropDown().click();
                browser.driver.sleep(5000);

                //Select German Language
                language_page.language_German_De().click().then(function () {
                    helperUtil.addStep("User changed the language to German");
                });

                browser.driver.sleep(5000);

                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Updated URL is :: " + currentURL);
                    helperUtil.addStep("Updated Language is :: " + currentURL.split('/')[3]);

                    //Restore the German Language to English
                    common_page.common_LanguageDropDown().click().then(function () {
                        browser.driver.sleep(5000);
                        language_page.language_English_En().click();
                        browser.driver.sleep(5000);
                    });

                });
            });
        });

        xdescribe('- Approach_2', function () {

            xit('Successful Login', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("1. Successful Login ");

                browser.ignoreSynchronization = true;
                browser.get(JSONData.AutoTextList[0].BASE_URL);

                login_page.login_closeCookies().isPresent().then(function (isDisplayed){

                    if(isDisplayed === true) {
                        helperUtil.addStep("Cookies displayed on the page");
                        //Login Steps
                        login_page.login_closeCookies().click().then(function () {
                            helperUtil.addStep("Cookies closed successfully");
                            browser.driver.sleep(3000);
                            helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);
                            browser.driver.sleep(3000);
                            helperUtil.addStep("Login Successfully");

                            //Get Current URL
                            browser.getCurrentUrl().then(function (currentURL) {
                                JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                            });
                        });

                        //Validate WebPage title
                        browser.getTitle().then(function(webPageTitle){
                            helperUtil.Reporter_toBe(webPageTitle,JSONLang.AutoTextList[0].HomePageTitle,'User Logged In Successfully','WebPage Title should be '+JSONLang.AutoTextList[0].HomePageTitle);
                        });
                    }
                    else {

                        //Login Steps
                        helperUtil.login(JSONData.AutoTextList[0].NickName,JSONData.AutoTextList[0].Password);

                        //Get Current URL
                        browser.getCurrentUrl().then(function (currentURL) {
                            JSONLang = require('./../language/lang_'+ currentURL.split('/')[3] +'.json');
                        });

                        //Validate WebPage title
                        browser.getTitle().then(function(webPageTitle){
                            helperUtil.Reporter_toBe(webPageTitle,JSONLang.AutoTextList[0].HomePageTitle,'User Logged In Successfully','WebPage Title should be '+JSONLang.AutoTextList[0].HomePageTitle);
                        });
                    }
                });
            });

            it('Close any popups IF they appear', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("2. Close any popups IF they appear" );

                //Check for Daily Bonus Pop-up
                common_page.common_DailyBonus().isPresent().then(function (isDisplayed){
                    if(isDisplayed === true) {
                        common_page.common_DailyBonus().click();
                        helperUtil.addStep("Daily Bonus pop-up closed successfully");
                    }
                    else{
                        helperUtil.addStep("No Daily Bonus pop-up found");
                    }
                });
            });

            it('Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("3. Navigate through the pages Slots, Bingo, Casino & Poker and check if you are on the correct page after each navigation." );

                browser.driver.sleep(5000);
                dashboard_page.dashboard_Bingo().click();
                browser.getTitle().then(function(bingoWebPageTitle){
                     helperUtil.Reporter_toBe(bingoWebPageTitle,JSONLang.AutoTextList[0].BingoPageTitle,'User redirected to Bingo page:: '+ bingoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].BingoPageTitle);

                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Bingo().getText().then(function (bingo) {
                        helperUtil.Reporter_toBe(bingo,JSONLang.AutoTextList[0].BingoTitle,"Bingo Page found Successfully","Title Name should be "+JSONLang.AutoTextList[0].BingoTitle);
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Casino().click();
                browser.getTitle().then(function(casinoWebPageTitle){
                    helperUtil.Reporter_toBe(casinoWebPageTitle,JSONLang.AutoTextList[0].CasinoPageTitle,'User redirected to Casino page :: '+ casinoWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].CasinoPageTitle);
                    browser.driver.sleep(5000);

                    dashboard_page.dashboard_Casino().getText().then(function (casino) {
                        helperUtil.Reporter_toBe(casino,JSONLang.AutoTextList[0].CasinoTitle,"Casino Page found Successfully","Title Name should be "+JSONLang.AutoTextList[0].CasinoTitle);
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Poker().click();
                browser.getTitle().then(function(pokerWebPageTitle){
                    helperUtil.Reporter_toBe(pokerWebPageTitle,JSONLang.AutoTextList[0].PokerPageTitle,'User redirected to Poker page :: '+ pokerWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].PokerPageTitle);
                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Poker().getText().then(function (poker) {
                        helperUtil.Reporter_toBe(poker,JSONLang.AutoTextList[0].PokerTitle,"Poker Page found Successfully","Title Name should be "+JSONLang.AutoTextList[0].PokerTitle);
                        browser.driver.sleep(5000);
                    });
                });

                dashboard_page.dashboard_Slots().click();
                browser.getTitle().then(function(slotsWebPageTitle){
                    helperUtil.Reporter_toBe(slotsWebPageTitle,JSONLang.AutoTextList[0].SlotPageTitle,'User redirected to Slots page :: '+ slotsWebPageTitle,'WebPage Title should be '+JSONLang.AutoTextList[0].SlotPageTitle);
                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Slots().getText().then(function (slots) {
                        helperUtil.Reporter_toBe(slots,JSONLang.AutoTextList[0].SlotTitle,"Slots Page found Successfully","Title Name should be "+JSONLang.AutoTextList[0].SlotTitle);
                        browser.driver.sleep(5000);
                    });
                });
            });

            it('Search for Slot on the website in the search games section', function () {
                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("4. Search for Slot on the website in the search games section" );

                common_page.common_Search().sendKeys(JSONLang.AutoTextList[0].SearchText);
                helperUtil.addStep("User searched for search text :: "+ " ' "+JSONLang.AutoTextList[0].SearchText + " ' ");
                browser.driver.sleep(9000);
            });

            it('Count a number of shown games and select one of them (but not the first or last one).', function () {
                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("5. Count a number of shown games and select one of them (but not the first or last one)." );

                common_page.common_Search_list().count().then(function(SearchResultCount) {
                    helperUtil.addStep("Total Search Result Count is :: "+SearchResultCount);

                    var searchIndex = JSONData.AutoTextList[0].SearchIndex;

                    if (SearchResultCount > 0 && SearchResultCount >= searchIndex)
                    {
                        gameToBeClicked = common_page.common_Search_list().get(searchIndex-1);
                        gameToBeClicked.getText().then(function (searchedGameName) {
                            helperUtil.addStep("User searched for "+searchIndex+"nd search result :: " + searchedGameName);
                        });
                    }
                    else
                    {
                        helperUtil.addStep(JSONLang.AutoTextList[0].SearchNoGamesFoundText);
                    }
                });
            });

            it('Confirm that you are on the correct game page.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("6. Confirm that you are on the correct game page." );

                gameToBeClicked.getText().then(function (searchedGameName) {
                    helperUtil.addStep("User searched for :: "+searchedGameName);

                    gameToBeClicked.click().then(function () {
                        browser.getCurrentUrl().then(function (currentURL) {
                            helperUtil.addStep("User Redirected to :: "+currentURL);
                            browser.driver.sleep(5000);
                        });
                    });
                });
            });

            it('Change the language from English to German.', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("7. Change the language from English to German." );

                //Click on HomePage Icon
                common_page.common_Logo().click();
                browser.driver.sleep(5000);

                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Current URL is :: " + currentURL);
                    helperUtil.addStep("Current Language is :: " + currentURL.split('/')[3]);

                });

                //Change the Language from English to German
                common_page.common_LanguageDropDown().click();
                browser.driver.sleep(5000);

                //Select German Language
                language_page.language_German_De().click().then(function () {
                    helperUtil.addStep("User changed the language to German");
                });

                browser.driver.sleep(5000);

                browser.getCurrentUrl().then(function (currentURL) {
                    JSONLang = require('./../language/lang_' + currentURL.split('/')[3] + '.json');
                    helperUtil.addStep("Updated URL is :: " + currentURL);
                    helperUtil.addStep("Updated Language is :: " + currentURL.split('/')[3]);

                    //Restore the German Language to English
                    common_page.common_LanguageDropDown().click();
                    browser.driver.sleep(5000);
                    language_page.language_English_En().click();
                });
            });

            it('Successful Logout', function () {

                helperUtil.setFeature('Practical task');
                helperUtil.setStory('In this case, all the test steps performed individually');
                helperUtil.envInfo();
                helperUtil.setDescription("8. Successful Logout" );

                //Click on HomePage Icon
                common_page.common_Logo().click();
                browser.driver.sleep(5000);

                dashboard_page.dashboard_Nickname().click().then(function () {
                    browser.driver.sleep(5000);
                    dashboard_page.dashboard_Logout().click();
                    browser.driver.sleep(5000);
                    helperUtil.addStep('Successfully logout.');
                });
            });
        });
    });