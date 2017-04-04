# TruValue Labs

## How to setup and run Functional Automation

### Pre-requisites :-
  1.  **Java** should be installed on the system.

  2.  **Setup Node :-**
  		For setting up protractor we have to run below mentioned command :-

       ``sudo apt-get install nodejs``

As the nodejs package contains the nodejs binary as well as ``npm``, so we don't need to install ``npm`` separately.

  3. **Setup Maven:-** To install maven we have to run below mentioned command :-
    
    ``sudo apt-get install maven``

  4. **Download the Project from GIT:-**

  	``git clone https://github.com/kkashyap1707/TruValue/ ``

### Tools and Technologies Used :-
  1. **Node Version** : ``node -v`` **(v6.9.1)**
  2. **npm Version** : ``npm -v`` **(3.10.8)**
  3. **Java Version** : ``java -version`` **(1.8.)**
  4. **Protractor Version**  : ``protractor --version`` **(Version 4.0.11)**
  5. **Maven Version**  : ``mvn --version`` **(Apache Maven 3.3.9)**
  6. **Framework** : Grunt + Jasmine  :
     - **Grunt** : ``grunt --version`` **(grunt-cli v1.2.0, grunt v1.0.1)** is a task-based command line build tool for JavaScript projects. It is a bunch of built-in tasks that will get you pretty far, with the ability to build your own plugins and scripts that extend the basic functionality.
     - **Jasmine** is a software project management and comprehension tool. It manages all dependencies and different flows for building a project.
  7. **End to End Functional testing using Protractor** :
 	Protractor is an open source end to end testing framework to test AngularJS application. Protractor is a Node.js program built on top of WebDriverJS.

    Start up a selenium server. By default, the tests expect the selenium server to be running at http://localhost:4444/wd/hub. A selenium server can be started with webdriver-manager which is included in bin/webdriver-manager.

    ``webdriver-manager update``

    ``webdriver-manager start``

    Protractor's test suite runs against the included test application. Start that up with

    ``npm test``

  8. **Reporting :**
  Allure Reporting :Allure is a flexible, lightweight multi-language test report tool, with the possibility of adding to the report of additional information such as screenshots, logs and so on. It is a great degree simple to use and makes excellent execution reports.

### Execution Steps :-
1. Extract the downloaded project from git
2. Open Terminal
3. Go to the project location
4. Enter the below mentioned commands to download the dependency of the project :-
	**Download Dependency of Project** :  **``npm install``**
	On Successful compilation of the project it will download all the dependencies like (Grunt,Jshint,grunt-protractor-runner Allure Reporting etc.)
5. Enter the below mentioned command to update Selenium WebDriver
	**``npm run update``**
5. Enter the below mentioned commands to compile and run the whole project :-
	**Run Project** : **``NODE_ENV=production NODE_USERTYPE=NONSASB npm test ``**
	In this case, you can specify Environment type and User type. Environments type can be : production , staging, devapp and QA while USERTYPE are : SASB and NONSASB
6. To run the specific module, we have to pass below mentiioned command :-
	**Run Specific Module** :  **``NODE_ENV=EnvironmentName NODE_USERTYPE=Usertype npm run script-name``**
    **e.g.** :  **``NODE_ENV=production NODE_USERTYPE=NONSASB npm run terms-test``**
   
**Sample** 

![Sample Run Specific Test Suite](Resources/Run_Specific_Test_Suite.png)
             



| Module Name    | Production    |Staging       | DevApp    |QA       |
| -------------  | --------------|--------------|-----------|------------|
| Regression Test|NODE_ENV=production NODE_USERTYPE=NONSASB npm test| NODE_ENV=staging NODE_USERTYPE=NONSASB npm test|NODE_ENV=devapp NODE_USERTYPE=SASB npm test|NODE_ENV=QA NODE_USERTYPE=SASB npm test|
| About          |NODE_ENV=production NODE_USERTYPE=NONSASB npm run about-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run about-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run about-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run about-test               |
| Benchmark      |NODE_ENV=production NODE_USERTYPE=NONSASB npm run benchmarks-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run benchmarks-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run benchmarks-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run benchmarks-test|
| Blog           |NODE_ENV=production NODE_USERTYPE=NONSASB npm run blog-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run blog-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run blog-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run blog-test|
| Dashboard      |NODE_ENV=production NODE_USERTYPE=NONSASB npm run dashboard-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run dashboard-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run dashboard-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run dashboard-test|
| FAQ            |NODE_ENV=production NODE_USERTYPE=NONSASB npm run faq-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run faq-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run faq-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run faq-test|
| Forgot Password|NODE_ENV=production NODE_USERTYPE=NONSASB npm run forgotPassword-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run forgotPassword-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run forgotPassword-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run forgotPassword-test|
| Help Centre    |NODE_ENV=production NODE_USERTYPE=NONSASB npm run helpCentre-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run helpCentre-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run helpCentre-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run helpCentre-test|
| Industries     |NODE_ENV=production NODE_USERTYPE=NONSASB npm run industries-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run industries-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run industries-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run industries-test|
| Lead Form      |NODE_ENV=production NODE_USERTYPE=NONSASB npm run leadForm-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run leadForm-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run leadForm-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run leadForm-test|
| Login          |NODE_ENV=production NODE_USERTYPE=NONSASB npm run login-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run login-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run login-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run login-test|
| Portfolio      |NODE_ENV=production NODE_USERTYPE=NONSASB npm run  portfolio-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run  portfolio-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run  portfolio-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run  portfolio-test|
| Privacy        |NODE_ENV=production NODE_USERTYPE=NONSASB npm run privacy-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run privacy-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run privacy-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run privacy-test|
| SANITY         |NODE_ENV=production NODE_USERTYPE=NONSASB npm run sanity-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run sanity-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run sanity-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run sanity-test|
| Search         |NODE_ENV=production NODE_USERTYPE=NONSASB npm run search-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run search-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run search-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run search-test|
| Sectors        |NODE_ENV=production NODE_USERTYPE=NONSASB npm run sectors-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run sectors-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run sectors-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run sectors-test|
| Settings       |NODE_ENV=production NODE_USERTYPE=NONSASB npm run settings-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run settings-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run settings-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run settings-test|
| SideMenu       |NODE_ENV=production NODE_USERTYPE=NONSASB npm run sideMenu-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run sideMenu-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run sideMenu-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run sideMenu-test|
| Terms          |NODE_ENV=production NODE_USERTYPE=NONSASB npm run terms-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run terms-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run terms-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run terms-test|
| User Management|NODE_ENV=production NODE_USERTYPE=NONSASB npm run userManagement-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run userManagement-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run userManagement-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run userManagement-test|
| Watchlist      |NODE_ENV=production NODE_USERTYPE=NONSASB npm run watchlist-test|NODE_ENV=staging NODE_USERTYPE=NONSASB npm run watchlist-test|NODE_ENV=devapp NODE_USERTYPE=SASB npm run watchlist-test|NODE_ENV=QA NODE_USERTYPE=SASB npm run watchlist-test|





### Steps to read the Funtional Automation Execution Result (index.html) File :-
1. Go to the project directory
2. Go to ``/target/site/allure-maven-plugin/ ``
3. click on ``index.html`` file
4. Once it will open, it looks like

![Dashboard Report](Resources/Allure_Overview.png)
             **Dashboard Report**

![Graphical Report](Resources/Allure_Graph.png)
             **Graphical Report Report**

![Individual Test Report](Resources/Individual_Test_Report.png)
			 **Individual Test Report**