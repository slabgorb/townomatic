mongoose = require 'mongoose'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Community = new Schema
    name: String


  mongoose.model 'Community', Community
  return null
