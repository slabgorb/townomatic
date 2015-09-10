_ = require('underscore')
module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    jst:
      compile:
        files: 'public/js/templates.js': [ 'app/templates/*.html' ]
        processName: (filepath) -> console.log(filepath); return _.last filepath.split('/')
        prettify: true
    sass: compile: files: 'public/stylesheets/main.css': [ 'sass/**/*.scss' ]
    concat: vendor: files: 'public/js/vendor.js': [
      'bower_components/jquery/dist/jquery.min.js'
      'bower_components/jquery-ui/jquery-ui.min.js'
      'bower_components/underscore/underscore-min.js'
      'bower_components/d3/d3.js'
      'bower_components/backbone/backbone.js'
      'bower_components/backbone-modal/backbone.modal-min.js'
      'bower_components/elasticsearch/elasticsearch.min.js'
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
      jst:
        files: ['src/**/*.html']
        tasks: 'jst'
        options:
          livereload: true
      coffee:
        files: ['app/**/*.coffee'],
        tasks: 'coffee'
        options:
          livereload: true


  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jst'



  grunt.registerTask 'default', [ 'watch' ]
  return