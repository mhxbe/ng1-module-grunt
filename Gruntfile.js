'use strict';

module.exports = function(grunt) {

    var paths = {
        src: {
            js: [
                'src/js/module.js',
                'src/js/*.js', // files: config.js, run.js, info.js
                'src/js/*/*.js' // folders: constants, controllers, directives, factories, providers, services, values
            ]
        }
    };

    require('load-grunt-tasks')(grunt, {
        config: 'package.json',
        scope: 'devDependencies'
    });

    // Project configuration.
    grunt.initConfig({

        uglify: {
            production: {
                options: {
                    mangle: true,
                    sourceMap: true
                },
                files: {
                    'dist/ng1-skeleton-grunt.min.js': paths.src.js
                }
            }
        },

        concat: {
            dist: {
                src: paths.src.js,
                dest: 'dist/ng1-skeleton-grunt.js'
            }
        },

        clean: {
            dist: 'dist/*',
            development: 'dist/ng1-skeleton-grunt.js'
        },

        watch: {
            options: {
                interrupt: true
            },
            js: {
                files: paths.src.js,
                tasks: [
                    'concat',
                    'eslint'
                ]
            }
        },

        eslint: {
            target: paths.src.js
        }

    });

    // DEVELOPMENT
    grunt.registerTask('development', [
        'clean:development',
        'concat'
    ]);

    // PRODUCTION
    grunt.registerTask('production', [
        'clean:dist',
        'concat',
        'uglify:production'
    ]);

    // DEFAULT
    grunt.registerTask('default', [
        'development',
        'watch'
    ]);

};
