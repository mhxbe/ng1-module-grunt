'use strict';

module.exports = function(grunt) {

    var paths = {
        src: {
            css: 'src/css/scss/**/*.scss',
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

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            production: {
                options: {
                    mangle: true,
                    sourceMap: true
                },
                files: {
                    'dist/<%= pkg.name %>.min.js': paths.src.js
                }
            }
        },

        concat: {
            development: {
                src: paths.src.js,
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        clean: {
            developmentJS: {
                src: ['dist/<%= pkg.name %>.js']
            },
            developmentCSS: {
                src: ['dist/<%= pkg.name %>.css']
            },
            all: 'dist/*'
        },

        watch: {
            options: {
                interrupt: true
            },
            js: {
                files: paths.src.js,
                tasks: [
                    'clean:developmentJS',
                    'concat',
                    'eslint'
                ]
            },
            css: {
                files: paths.src.css,
                tasks: [
                    'clean:developmentCSS',
                    'sass:development'
                ]
            }
        },

        eslint: {
            target: paths.src.js
        },

        sass: {
            development: {
                files: {
                    'dist/<%= pkg.name %>.css': 'src/css/scss/base.scss'
                }
            },
            production: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/<%= pkg.name %>.min.css': 'src/css/scss/base.scss'
                }
            }
        }

    });

    // DEVELOPMENT
    grunt.registerTask('development', [
        'clean:developmentJS',
        'clean:developmentCSS',
        'concat:development',
        'sass:development'
    ]);

    // PRODUCTION
    grunt.registerTask('production', [
        'clean:all',
        'concat',
        'sass',
        'uglify'
    ]);

    // DEFAULT
    grunt.registerTask('default', [
        'development',
        'watch'
    ]);

};
