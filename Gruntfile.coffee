_ = require('underscore')
module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    mongoimport:
      options:
        db: 'townomatic_development'
        collections: [
          {
            name: 'occupations'
            type: 'json'
            file: 'db/seeds/occupations.json'
            jsonArray: true
            drop: true
          }
        ]
    prep_corpus:
      corpora:
        files: [src: 'corpora/*.txt' ]
    jst:
      compile:
        files: 'public/js/templates.js': [ 'app/templates/**/*.html' ]
        processName: (filepath) -> console.log(filepath); return _.last filepath.split('/')
        prettify: true
    sass: compile: files: 'public/stylesheets/main.css': [ 'sass/main.scss' ]
    concat:
      vendor_js:
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
          'bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js'
          'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js'
        ]
      vendor_css:
        files: 'public/stylesheets/vendor.css': [
          'bower_components/bootstrap/dist/css/bootstrap.min.css'
          'bower_components/bootstrap-select/dist/css/bootstrap-select.min.css'
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
      srv:
        files: [
          { cwd: 'src', expand: true, ext: '.js', dest: 'dist/', src: '**/*.coffee' }
        ]

      app:
        sourceMap: true
        files:
          'public/js/app.js': [
            'app/lib/extensions.coffee'
            'app/lib/townomatic.coffee'
            'app/lib/townomatic_logger.coffee'
            'app/lib/models/base.coffee'
            'app/lib/models/*.coffee'
            'app/lib/collections/base.coffee'
            'app/lib/collections/*.coffee'
            'app/lib/views/base.coffee'
            'app/lib/views/*.coffee'

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
        tasks: 'sass',
        options:
          livereload: true
      jst:
        files: 'app/templates/**/*.html'
        tasks: 'jst'
        options:
          livereload: true
      coffeeapp:
        files: ['app/**/*.coffee','lib/**/*.coffee']
        tasks: 'coffee:app'
        options:
          livereload: true
      coffeesrv:
        files: [ 'src/**/*.coffee'],
        tasks: 'coffee:srv'
        options:
          livereload: true
      corpus:
        files: 'corpora/*.txt'
        tasks: 'prep_corpus'
      mocha:
        files: ['src/**/*.coffee', 'test/**/*.coffee']
        tasks: 'mochaTest'

  grunt.registerMultiTask 'prep_corpus', () ->
    _.each @files.slice(), (file) ->
      grunt.log.writeln("processing corpus files #{file.src} ...")
      _.each file.src, (f) ->
        content = grunt.file.read(f, { encoding: 'utf8' } )
        outfile = f.replace('.txt', '.corpus')
        grunt.file.write outfile, content.toLowerCase().replace(/[\[\]0-9.,|"'\/\\#!$%?\^&\*»«;:{}=\-_`~()]/g,"").replace(/\s{1,}/g,'_')


  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-mongoimport'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jst'
  grunt.loadNpmTasks 'grunt-mocha-test'
  grunt.registerTask 'default', [ 'concat', 'jst', 'sass', 'coffee', 'watch' ]
  return
