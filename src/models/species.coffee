mongoose = require 'mongoose'
_ = require 'underscore'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Species = new Schema
    name: String
    expression: Schema.Types.Mixed

  mongoose.model 'Species', Species
