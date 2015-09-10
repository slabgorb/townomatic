module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    sass: dist: files: [ {
      expand: true
      cwd: 'scss/'
      src: [ '*.scss' ]
      dest: '/public/stylesheets'
      ext: '.css'
    } ]




  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-contrib-sass'
  # Default task(s).
  grunt.registerTask 'default', [ 'sass' ]
  return
