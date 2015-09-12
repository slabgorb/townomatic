mongoose = require 'mongoose'
_ = require 'underscore'
Schema = mongoose.Schema

unless mongoose.models.Genetics?
  require("./genetics").register_model(mongoose)

exports.register_model = (mongoose) ->
  Gene = new Schema
    dna:
      type: String
      default: -> '000000'.replace /0/g, ->  (~ ~(Math.random() * 16)).toString 16

  Gene.methods.randomize = () ->
    @dna = '000000'.replace /0/g, ->  (~ ~(Math.random() * 16)).toString 16


  Being = new Schema
    species: String
    name:
      first: String
      last: String
    gender:
      type: String
      enum: ['Male', 'Female', 'Neuter']
    occupation: String
    age:
      type: Number
      min: 0
      default: 1
    genes: [ Gene ]
    living: {type: Boolean, default: true}
    children: [Schema.Types.ObjectId]
    parents: [Schema.Types.ObjectId]
    spouses: [Schema.Types.ObjectId]

  Being.methods.marry  = (spouse) ->
    @spouses.push spouse.id

  Being.methods.divorce = (spouse) ->
    @spouses = _.filter @spouses, (s) -> s == spouse.id

  Being.methods.die = ->
    @living = false

  mongoose.model 'Gene', Gene
  mongoose.model 'Being', Being
