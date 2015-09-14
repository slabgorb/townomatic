should = require 'should'
require 'coffee-script/register'
_ = require 'underscore'
mongoose = require 'mongoose'

delete mongoose.connection.models['Species']
delete mongoose.connection.models['Being']

require("../src/models/species").register_model(mongoose)
require("../src/models/being").register_model(mongoose)

describe "species", ->
  ex =
    "emotional stability":
      reactive: [804]
      stable: [805]
    "skin color":
      blue: [60, 61, 62]
      green: [63, 64, 65]
      yellow: [65, 66, 67]

  species = new mongoose.models.Species
    name: 'meseeks'
    expression: ex

  it "refers to a species", ->
    species.name.should.equal "meseeks"

describe "being", ->
  ex =
    "skin color":
      blue: [60, 61, 62]
      green: [63, 64, 65]
      yellow: [65, 66, 67]
    "eye color":
      blue: [50, 51, 52]
      green: [53, 54, 55]
      yellow: [55, 56, 57]

  species = new mongoose.models.Species
    name: 'meseeks'
    expression: ex

  adam = new mongoose.models.Being
    name: {first: 'Adam', last: 'Ant'}
    species: species.id
    gender: "Male"
    occupation: "Biologist"
    age: 50
  adam.setValue('species', species)

  adam.setValue('genes', ["F450EB", "516F31", "5AFE21", "BB9D50",
  "D3B19E", "67AAF8", "98068E", "FAFAB6", "D6BBDF", "301A9A",
  "EC4F4F", "7F3CA0", "71F48F", "783C46", "4C0396", "28B426",
  "97F76B", "36C10D", "36B59A", "585EC1", "FF52B6", "9A42FE",
  "5157BB", "B14E70", "69418D", "7C77F4", "2B61F3", "F1B844",
  "0746BA", "12C054", "1A5D38", "593D5F", "CCA96A", "88E318",
  "4E7CB2", "F567D1", "B7D310", "45FA74", "651338", "646456",
  "29E923", "3A2EE4", "BCB360", "698980", "CAB0E1", "AD599F",
  "4F3841", "6F6131", "3F1E1D", "028A2E", "C470E9", "6A645C",
  "3C0DD5", "3004CF", "9EB4BF", "0B9CA5", "A2CB8E", "8C1B3C",
  "BF4FA9", "14E9F1", "AA7247", "5BAA85", "013D4C", "9726B9",
  "20B50D", "6F5142", "47E39A", "E69507", "B72B3C", "CD7B40",
  "371071", "F9B249", "382E57", "7B6107", "868981", "D7AAE9",
  "3D4DAD", "83D406", "69858F", "6985BD", "12C01D", "6F90F3",
  "8036CB", "451C2D", "5A1666", "249A2A", "47C740", "B20201",
  "D2B2BF", "95A784", "D5D743", "08182F", "F6AA56", "EBEF0D",
  "3AA6A2", "06AF8F", "8C1258", "0EF5C7", "70969F", "C66F9B",
  "8FBDCB", "42D9EE", "73D684", "78C63C", "CFA067", "339D2C",
  "24A05B", "4E4815", "B87A63", "B5EF40", "8140AA", "1C7A46",
  "6E244D", "B9A3CF", "AAA679", "5966FF", "003440", "4B3604",
  "C39891", "3F253A", "442A89", "042AF8", "037D12", "7B9602",
  "9276A8", "66D837", "D578CF", "CD0B82"])

  adam.save()

  eve = new mongoose.models.Being
    name: {first: 'Eve', last: 'Bug'}
    species: species.id
    gender: "Female"
    occupation: "Homemaker"
    age: 50
  adam.setValue('species', species)
  eve.save()

  it "makes a being", ->
    adam.name.first.should.equal 'Adam'
    adam.name.last.should.equal 'Ant'

  it "has default genetics", ->
    adam.genes.length.should.equal 128

  it "should have 6-digit hex numbers for all genes", ->
    (_.filter adam.genes, (gene) -> gene.length == 6).length.should.equal 128
    numbers = _.map adam.genes, (gene) -> parseInt(gene, 16)
    _.max(numbers).should.be.below(16777216)
    _.min(numbers).should.be.above(-1)

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

  it "expresses genetics", ->
    adam.express().should.eql
      'skin color':
        blue: 3
        green: 1
        yellow: 4
      'eye color':
        blue: 1
        green: 0
        yellow: 3
