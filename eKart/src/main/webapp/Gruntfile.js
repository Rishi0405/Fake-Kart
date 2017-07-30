module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
          beautify: false,
          mangle: false,
          compress: {
              drop_console: true,
              global_defs: {
                  'DEBUG': true
              },
              dead_code: true
           }
        },
        app_common: {
          files: {
            'resources/gruntmin/app.js': ['resources/plugins/script/**/*.js','resources/app/*.js']
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
    	      'resources/gruntmin/common.css': ['resources/css/**/*.css', 'resources/plugins/css/**/.min.css','resources/plugins/css/**/.css']
    	    }
    	 }
      },
      watch: {
    	 app_commons: {
    	    files: ['resources/plugins/script/**/*.js','resources/app/*.js'],
    	    tasks: ['uglify:app_common'],
    	    options: {
    	      spawn: false,
    	    },
    	 },
    	 lazy_load: {
     	    files: ['resources/modules/**/*.js', '!resources/modules/**/*.min.js'],
     	    tasks: ['uglify:lazy_load'],
     	    options: {
     	      spawn: false,
     	    },
     	 },
     	css_min: {
     	    files: ['resources/css/**/*.css', 'resources/plugins/css/**/.min.css','resources/plugins/css/**/.css'],
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
  grunt.registerTask('default', ['uglify','cssmin','watch:app_commons']);

};