should = require 'should'
require 'coffee-script/register'
_ = require 'underscore'
mongoose = require 'mongoose'

delete mongoose.connection.models['Genetics']
delete mongoose.connection.models['Being']
delete mongoose.connection.models['Gene']

require("../src/models/genetics").register_model(mongoose)
require("../src/models/being").register_model(mongoose)



describe "genetics", ->
  ex =
    "emotional stability":
      reactive: [804]
      stable: [805]
    "skin color":
      blue: [60, 61, 62]
      green: [63, 64, 65]
      yellow: [65, 66, 67]

  genetics = new mongoose.models.Genetics
    species: 'meseeks'
    geneLength: 12
    expression: ex

  it "refers to a species", ->
    genetics.species.should.equal "meseeks"

describe "gene", ->
  gene = new mongoose.models.Gene

  it "has a dna value", ->
    gene.dna.length.should.equal 6

describe "being", ->

  adam = new mongoose.models.Being
    name: {first: 'Adam', last: 'Ant'}
    species: "human"
    gender: "Male"
    occupation: "Biologist"
    age: 50
  adam.save()

  eve = new mongoose.models.Being
    name: {first: 'Eve', last: 'Bug'}
    species: "human"
    gender: "Female"
    occupation: "Homemaker"
    age: 50
  eve.save()

  it "makes a being", ->
    adam.name.first.should.equal 'Adam'
    adam.name.last.should.equal 'Ant'

  it "marries one being to another", ->
    adam.marry(eve)
    adam.spouses.length.should.equal 1

  it "divorces one being from another", ->
    adam.divorce(eve)
    adam.spouses.length.should.equal 0

  it "recognizes life", ->
    adam.living.should.equal true

  it "recognizes death", ->
    adam.die()
    adam.living.should.equal false
