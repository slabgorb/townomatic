utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')

describe "models/steading", ->
  steading = new mongoose.models.Steading
    name: 'Busytown'
    population: []
    colors:
      main: "#FF0000"
      secondary: "#00FFFF"
    icon: 'wolf-rampant'

  it "validates icons", (done) ->
    mongoose.models.Steading.findOneAndUpdate {name: 'Busytown'}, {icon: 'foo'}, { runValidators: true }, (err) ->
      (typeof err).should.equal 'object'
    mongoose.models.Steading.findOneAndUpdate {name: 'Busytown'}, {icon: 'squirrel'}, { runValidators: true }, (err) ->
      (err == null).should.be.true
      done()
