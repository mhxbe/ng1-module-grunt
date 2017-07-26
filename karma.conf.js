'use strict';
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],


        // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined plugin - Object.
        // By default, Karma loads all sibling NPM modules which have a name starting with karma-*
        // plugins: ['karma-*'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',

            // Load files
            'src/js/module.js',
            'src/js/*.js',
            'src/js/**/*.js',

            // helper
            'tests/karma.helper.js',

            // Load tests
            'tests/module.spec.js',
            'tests/*.spec.js',
            'tests/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],

        // This will list all tests when clicking on DEBUG on test-browser
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/js/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        // karma-mocha-reporter options
        // https://github.com/litixsoft/karma-mocha-reporter
        mochaReporter: {
            colors: {
                success: 'green',
                info: 'cyan',
                warning: 'yellow',
                error: 'red'
            },

            symbols: {
                success: '✔',
                info: 'ℹ',
                warning: '⚠',
                error: '✖'
            },

            // 'full', 'autowatch', 'minimal'
            // autowatch: first run will have the full output and the next runs just output the summary and errors in mocha style
            output: 'full',

            divider: '░'
        },

        // karma-coverage
        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            subdir: '.'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // When Karma is watching the files for changes, it will delay a new run until the current run is finished.
        // Enabling this setting will cancel the current run and start a new run immediately when a change is detected.
        restartOnFileChange: false, // default


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
