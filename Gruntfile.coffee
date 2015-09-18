_ = require('underscore')
module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    prep_corpus:
      corpora:
        files: [src: 'corpora/*.txt' ]
    jst:
      compile:
        files: 'public/js/templates.js': [ 'app/templates/*.html' ]
        processName: (filepath) -> console.log(filepath); return _.last filepath.split('/')
        prettify: true
    sass: compile: files: 'public/stylesheets/main.css': [ 'sass/main.scss' ]
    concat:
      vendor:
        files: 'public/js/vendor.js': [
          'bower_components/jquery/dist/jquery.min.js'
          'bower_components/jquery-ui/jquery-ui.min.js'
          'bower_components/underscore/underscore-min.js'
          'bower_components/d3/d3.js'
          'bower_components/backbone/backbone.js'
          'bower_components/backbone-nested-model/backbone-nested.js'
          'bower_components/backbone-modal/backbone.modal-min.js'
          'bower_components/elasticsearch/elasticsearch.min.js'
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
        ]
      bootstrap_css:
        files: 'public/stylesheets/bootstrap.css': [
          'bower_components/bootstrap/dist/css/bootstrap.min.css'
        ]

    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: ['coffee-script/register', 'should']
          debug: true
          'check-leaks': true
          recursive: true
          sort: true

        src: ['test/**/*.coffee']

    coffee:
      app:
        sourceMap: true
        files:
          'public/js/app.js': [
            'lib/townomatic.coffee',
            'lib/townomatic_model.coffee'
            'lib/townomatic_collection.coffee'
            'lib/townomatic_view.coffee'
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

      mocha:
        files: ['**/*.coffee']
        tasks: ['mochaTest']

      css:
        files: '**/*.scss',
        tasks: ['sass'],
        options:
          livereload: true
      jst:
        files: 'app/templates/*.html'
        tasks: 'jst'
        options:
          livereload: true
      coffee:
        files: 'app/**/*.coffee',
        tasks: 'coffee'
        options:
          livereload: true

      corpus:
        files: 'corpora/*.txt'
        tasks: 'prep_corpus'

  grunt.registerMultiTask 'prep_corpus', () ->
    _.each @files.slice(), (file) ->
      grunt.log.writeln("processing corpus files #{file.src} ...")
      _.each file.src, (f) ->
        content = grunt.file.read(f, { encoding: 'utf8' } )
        outfile = f.replace('.txt', '.corpus')
        grunt.file.write outfile, content.toLowerCase().replace(/[\[\]0-9.,|"'\/\\#!$%?\^&\*;:{}=\-_`~()]/g,"").replace(/\s{1,}/g,'_')


  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jst'
  grunt.loadNpmTasks 'grunt-mocha-test'
  grunt.registerTask 'default', [ 'concat', 'sass','coffee', 'jst', 'mochaTest', 'watch' ]
  return
