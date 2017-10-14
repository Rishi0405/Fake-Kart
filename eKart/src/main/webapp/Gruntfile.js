module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
          beautify: false,
          mangle: true,
          compress: {
              drop_console: true,
              global_defs: {
                  'DEBUG': true
              },
              dead_code: true
           }
        },
        core_modules: {
        	files: {
                'resources/dist/core.min.js': [
                									'node_modules/angular/angular.js',
                									'node_modules/jquery/dist/jquery.js',
                									'node_modules/angular-animate/angular-animate.js',
                									'node_modules/angular-aria/angular-aria.js',
                									'node_modules/angular-material/angular-material.min.js',
                									'node_modules/angular-messages/angular-messages.js',
                									'node_modules/angular-sanitize/angular-sanitize.js',
                									'node_modules/angular-touch/angular-touch.js',
                									'node_modules/angular-translate/dist/angular-translate.js',
                									'node_modules/angular-translate/dist/angular-translate-loader-partial/angular-translate-loader-partial.js',
                									'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                									'node_modules/oclazyload/dist/ocLazyLoad.js',
                									'node_modules/tether/dist/js/tether.js',
                									'node_modules/popper.js/dist/umd/popper.js',
                									'node_modules/bootstrap/dist/js/bootstrap.js',
                									'node_modules/moment/min/moment-with-locales.js',
                									'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-2.0.0-SNAPSHOT.js',
                									'node_modules/underscore/underscore.js',
                									'node_modules/pace-js/pace.js'
                								   ]
              }
        },
        app_common: {
          files: {
            'resources/dist/app.min.js': [
            									'resources/app/core/app.js',
            									'resources/app/core/constant.js',
            									'resources/app/core/config.js',
            									'resources/app/core/run.js',
            									'resources/app/core/service.js',
            									'resources/app/core/filter.js',
            									'resources/app/core/directive.js',
            								 ]
          }
        },
        lazy_load: {
	      options: {
	        /* mangle: {
	           reserved: ['jQuery']
	         }*/
	      },
	      files: [{
	          expand: true,
	          src: ['resources/modules/**/*.js', '!resources/modules/**/*.min.js'],
	          dest: 'resources/modules',
	          cwd: '.',
	          rename: function (dst, src) {
	            // To keep the source js files and make new files as `*.min.js`:
	             return /*dst + '/' +*/ src.replace('.js', '.min.js');
	            // Or to override to src:
	            //return src;
	           }
	       }]
	     }
      },
      cssmin: {
    	 options: {
    	    mergeIntoShorthands: false,
    	    roundingPrecision: -1
    	 },
    	 target: {
    	    files: {
    	      'resources/dist/app.min.css': [
    	    	  									'node_modules/angular-material/angular-material.css',
    	    	  									'node_modules/tether/dist/css/tether.css',
    	    	  									'node_modules/bootstrap/dist/css/bootstrap.css',
    	    	  									'node_modules/pace-js/themes/blue/pace-theme-minimal.css',
    	    	  									'resources/app/core/app.css'
    	    	  							   ]
    	    }
    	 }
      },
      watch: {
    	 app_commons: {
    	    files: ['resources/app/core/*.js'],
    	    tasks: ['uglify:app_common'],
    	    options: {
    	      spawn: false,
    	    },
    	 },
//    	 lazy_load: {
//     	    files: ['resources/modules/**/*.js', '!resources/modules/**/*.min.js'],
//     	    tasks: ['uglify:lazy_load'],
//     	    options: {
//     	      spawn: false,
//     	    },
//     	 },
     	css_min: {
     	    files: ['resources/app/core/app.css'],
     	    tasks: ['cssmin'],
     	    options: {
     	      spawn: false,
     	      debounceDelay: 1000,
     	      reload: true
     	    },
     	 },
      },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};