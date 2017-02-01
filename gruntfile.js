// Configure task(s)
module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        build: {
          src: 'src/js/*.js',
          dest: 'js/script.min.js'
        },
        dev: {
          options: {
            beautify: true,
            mangle: false,
            compress: false,
            preserveComments: 'all'
          },
          src: 'src/js/*.js',
          dest: 'js/script.min.js'
        },


      },
      sass: {
        dev: {
          options: {
            outputstyle: 'expanded'
          },
          files: {
            'css/styles.css' : 'src/scss/app.scss',
          }
        },
        build: {
          options: {
            outputStyle: 'compressed'
          },
          files: {
            'css/styles.css': 'src/scss/app.scss'
          }

        }

      },

      watch: {
        js: {
          files: ['src/js/*.js'],
          tasks: ['uglify:dev']
        },
        css: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass:dev']
        }
      }
    });

  //losf the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default',['uglify:dev','sass:dev']);
  grunt.registerTask('build',['uglify:build','sass:build']);


};
