mongoose = require 'mongoose'
_ = require 'underscore'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Gene = new Schema
    dna: String

  Gene.methods.randomize = () ->
    @dna = (Math.random() * 0xFFFFFF << 0).toString(16)

  Chromosome = new Schema
    genes: [ Gene ]


  Being = new Schema
    name:
      first: String
      last: String
    gender: String
    occupation: String
    age:
      type: Number
      min: 0
      default: 1
    genetics: [ Chromosome ]
    living: {type: Boolean, default: true}
    children: Array
    parents: Array
    spouses: Array

  Being.methods.marry  = (spouse) ->
    @spouses.push spouse

  Being.methods.divorce = (spouse) ->
    @spouses = _.without @spouses, _.findWhere(@spouses, {id: spouse.id})

  Being.methods.die = ->
    @living = false

  mongoose.model 'Gene', Gene
  mongoose.model 'Chromosome', Chromosome
  mongoose.model 'Being', Being
