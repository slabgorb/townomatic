mongoose = require 'mongoose'
_ = require 'underscore'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Genetics = new Schema
    species: String
    geneLength: Number
    expression: Schema.Types.Mixed

  mongoose.model 'Genetics', Genetics
