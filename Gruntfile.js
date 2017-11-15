// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: '**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/td-theme.css': 'css/td-theme.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**/*.css',
                        '**/*.js',
                        '**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                      baseDir: "."
                    }
                }
            }
        }

    });


    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};