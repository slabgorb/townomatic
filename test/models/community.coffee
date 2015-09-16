utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')

describe "models/community", ->
  community = new mongoose.models.Community
    name: 'Busytown'
    population: []
    colors:
      main: "#FF0000"
      secondary: "#00FFFF"
    icon: 'wolf-rampant'

  it "saves", ->
    community.save (err) ->
      (err == null).should.be.true

  it "validates icons", (done) ->
    mongoose.models.Community.findOneAndUpdate {name: 'Busytown'}, {icon: 'foo'}, { runValidators: true }, (err) ->
      (typeof err).should.equal 'object'
    mongoose.models.Community.findOneAndUpdate {name: 'Busytown'}, {icon: 'squirrel'}, { runValidators: true }, (err) ->
      (err == null).should.be.true
      done()
