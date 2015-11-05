/**
 *  Grunt tips for performance and maintaince. Follow them as far as your project needs.
 *  www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Information about the project
    pkg: grunt.file.readJSON('package.json'),

    // CSS tasks with post processor
    // Gives power of using future CSS with CSS NEXT
    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('postcss-import')(),
          require('autoprefixer')({browsers: 'last 2 versions'})
            // require('cssnano')(),
        ]
      },
      dist: {
        src: 'assets/css/_import.css',
        dest: 'dist/assets/css/style.css'
      }
    },

    // Merges all app source in single source.js file
    concat: {
      dist: {
        src: ['app/models/*.js', 'app/components/*.js'],
        dest: 'dist/app/source.js'
      },
      tests: {
        src: ['test/_init/*.js', 'test/models/*.js', 'test/components/*.js'],
        dest: 'test/suit.js'
      }
    },

    // Merges all vendors in single vendor.js file
    bower_concat: {
      dist: {
        dest: 'dist/app/vendor.js'
      }
    },

    // Watch for changes in styles and scripts
    watch: {
      files: [
        'assets/css/*.css',
        'app/**/*.js'
      ],
      tasks: [
        'liveDevelopment'
      ],
      options: {
        // Use browser extension for most convinient workflow
        // https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html
        livereload: true
      }
    },

    // Create documentation from comments
    dox: {
      options: {
        title: 'Documentation'
      },
      files: {
        src: ['app/*.js'],
        dest: 'docs'
      }
    },

    // Helps preserve code quality. Use with Sublime Text linter for supercharged workflow
    // www.medium.com/@addyosmani/auto-formatting-javascript-code-style-fe0f98a923b8
    // Use google style guides
    // www.google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
    jscs: {
      src: 'app/*/*.js',
      options: {
        config: '.jscsrc',
        esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        requireCurlyBraces: ['if']
      }
    },

    // Transpiles EcmaScript 6 to 5
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        src: 'dist/app/source.js',
        dest: 'dist/app/source.js'
      }
    }

  });

  // measures the time each task takes
  require('time-grunt')(grunt);

  // loads only required tasks, automatically
  require('jit-grunt')(grunt);

  // Builds project
  grunt.registerTask('default', [
    'jscs',
    'postcss',
    'concat',
    'babel',
    'bower_concat',
  ]);

  // Creates documentation
  grunt.registerTask('doc', [
    'dox',
  ]);

  // Watches for changes
  grunt.registerTask('liveDevelopment', [
    'newer:postcss',
    'newer:concat',
    'newer:jscs',
  ]);

};
