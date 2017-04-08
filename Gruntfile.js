/**
 * Created by Keshav on 04/04/2017.
 */

module.exports = function(grunt) {

//var path = require('path');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'specs/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        exec: {
            makeReport: {
                command: 'mvn site -Dallure.results_pattern=allure-results',

                //stdout: false,
                //stderr: false
            },
            convertPDF: {
                command: 'html-pdf ./project-reports.html businesscard.pdf',

                //stdout: false,
                //stderr: false
            }


        },

        protractor_webdriver: {
            start: {
                options: {
                    path: './node_modules/protractor/bin/',
                    command: 'webdriver-manager start',
                    keepAlive: true
                }
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: "conf.js",
                args: {

                    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
                    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
                    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26'

                 }
            },
            singlerun: {},
            auto: {
                /*keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }*/
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-maven-tasks');
    grunt.loadNpmTasks('grunt-exec');
    //grunt.loadNpmTasks('html-pdf');

    grunt.registerTask('test', [
        'default',
        'protractor_webdriver',
        'protractor:singlerun',
        /*'protractor:chrome',*/
        /*'protractor:firefox',*/

        'exec:makeReport',

        //'exec:convertPDF'

    ]);
    grunt.registerTask('default', ['jshint']);

};