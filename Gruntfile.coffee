module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    sass:
      compile:
        files:
          'public/stylesheets/main.css': [
            'sass/**/*.scss'
          ]

    coffee:
      compile:
        sourceMap: true
        files:
          'public/js/app.js': [
            'app/models/*.coffee'
            'app/collections/*.coffee'
            'app/views/*.coffee'
            'app/app.coffee'
          ]
    watch:
      configFiles:
        files: [
          'Gruntfile.coffee'
          'config/*.coffee'
        ]
        options: reload: true
      css:
        files: '**/*.scss',
        tasks: ['sass'],
        options:
          livereload: true

      coffee:
        files: ['app/**/*.coffee'],
        tasks: 'coffee'


  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  # Default task(s).
  grunt.registerTask 'default', [ 'watch' ]
  return
