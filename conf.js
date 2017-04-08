/**
 * Created by Keshav on 04/04/2017.
 */

exports.config = {


    allScriptsTimeout: 60000,
    getPageTimeout: 90000,


    specs: [
        'specs/sanity_test_spec.js',
        /*'specs/login_test_spec.js',*/
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOnly':'true' ,
        'directConnect': 'true'
    },

    framework: 'jasmine2',

    onPrepare: function () {
        var fs = require('fs-extra');
        var path = require('path');
        var resultsDir = 'allure-results';

        var basePath = '.';
        var outDir = path.resolve(basePath,resultsDir);
        fs.emptyDir(outDir, function (err) {
            if (!err) console.log('XML report directory cleared!')
        });


        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'none',      // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displaySuccessesSummary: false, // display summary of all successes after execution
            displayFailuresSummary: true,   // display summary of all failures after execution
            displayPendingSummary: true,    // display summary of all pending specs after execution
            displaySuccessfulSpec: true,    // display each successful spec
            displayFailedSpec: true,        // display each failed spec
            displayPendingSpec: false,      // display each pending spec
            displaySpecDuration: false,     // display each spec duration
            displaySuiteNumber: false,      // display each suite number (hierarchical)
            colors: {
                /*success: ' 🍻  ',*/ // Cheers Icon for Mac Only
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));

        generatereport();

        function generatereport() {
            var AllureReporter = require('jasmine-allure-reporter');
            jasmine.getEnv().addReporter(new AllureReporter({
                resultsDir: 'allure-results',
                basePath: basePath
            }));
        };

        function pdfreport() {

            var pdf = require('html-pdf');
            var html = fs.readFileSync('./project-reports.html', 'utf8');

            pdf.create(html).toFile('./businesscard.pdf', function (err, res) {
                if (err) return console.log(err);
            });
        }

       global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };
        browser.driver.manage().window().maximize();

    },

    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.

        defaultTimeoutInterval: 900000,
        /*grep: '#integartion'*/
        }
    };
