'use strict';

module.exports = function(grunt) {

    var paths = {
        src: {
            css: 'src/css/scss/**/*.scss',
            js: [
                'src/js/module.js',
                'src/js/*.js', // files: config.js, run.js, info.js
                'src/js/*/*.js' // folders: constants, controllers, directives, factories, providers, services, values,
            ],
            html: 'src/views/**/*.htm'
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
                    'dist/<%= pkg.name %>.min.js': paths.src.js.concat('tmp/ngtemplates.js')
                }
            }
        },

        concat: {
            development: {
                src: paths.src.js.concat('tmp/ngtemplates.js'),
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
            tmp: 'tmp',
            all: 'dist/*'
        },

        watch: {
            options: {
                interrupt: true,
                livereload: true
            },
            js: {
                files: paths.src.js,
                tasks: [
                    'clean:developmentJS',
                    'ngtemplates:development',
                    'concat',
                    'eslint',
                    'clean:tmp'
                ]
            },
            css: {
                files: paths.src.css,
                tasks: [
                    'clean:developmentCSS',
                    'sass:development'
                ]
            },
            html: {
                files: paths.src.html,
                tasks: [
                    'clean:developmentJS',
                    'ngtemplates:development',
                    'concat',
                    'clean:tmp'
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
        },

        ngtemplates: {
            options: {
                module: '<%= pkg.name %>',
                quotes: 'single'
            },
            development: {
                src: paths.src.html,
                dest: 'tmp/ngtemplates.js'
            },
            production: {
                src: paths.src.html,
                dest: 'tmp/ngtemplates.js',
                options: {
                    htmlmin: {
                        collapseWhitespace: true,
                        removeComments: true
                    }
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    useAvailablePort: true,
                    open: true,
                    base: ['.', 'example'],
                    livereload: true
                    // keepalive: true
                }
            }
        }

    });

    // DEVELOPMENT
    grunt.registerTask('development', [
        'clean:developmentJS',
        'clean:developmentCSS',
        'ngtemplates:development',
        'concat',
        'sass:development',
        'clean:tmp'
    ]);

    // PRODUCTION
    grunt.registerTask('production', [
        'clean:all',
        'ngtemplates:development',
        'concat',
        'ngtemplates:production',
        'uglify',
        'sass',
        'clean:tmp'
    ]);

    // DEFAULT
    grunt.registerTask('default', [
        'development',
        'watch'
    ]);

    // START WEBSERVER
    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);

};
