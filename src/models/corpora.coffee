_ = require 'underscore'

exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Corpus = new Schema
    name: String
