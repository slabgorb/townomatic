mongoose = require 'mongoose'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Being = new Schema
    first_name: String
    last_name: String
    age:
      type: Number
      min: 0
    genetics: String

  mongoose.model 'Being', Being
