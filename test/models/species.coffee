utils = require '../utils'
mongoose = require('mongoose')

describe "models/species", ->
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

  it "refers to a species",  ->
    species.name.should.equal "meseeks"
