should = require 'should'
require 'coffee-script/register'
_ = require 'underscore'
mongoose = require 'mongoose'

unless mongoose.models.Being?
  _.each ['being', 'community'], (file) ->
    require("../src/models/#{file}").register_model(mongoose)


describe "being", ->
  adam = new mongoose.models.Being
    name: {first: 'Adam', last: 'Ant'}
  eve = new mongoose.models.Being
      name: {first: 'Eve', last: 'Bug'}

  it "makes a being", ->
    adam.name.first.should.equal 'Adam'
    adam.name.last.should.equal 'Ant'

  it "marries one being to another", ->
    adam.marry(eve)
    adam.spouses.length.should.equal 1
    _.first(adam.spouses).name.first.should.equal 'Eve'

  it "divorces one being from another", ->
    adam.divorce(eve)
    adam.spouses.length.should.equal 0

  it "recognizes life", ->
    adam.living.should.equal true

  it "recognizes death", ->
    adam.die()
    adam.living.should.equal false
