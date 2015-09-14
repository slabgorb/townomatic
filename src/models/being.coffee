mongoose = require 'mongoose'
_ = require 'underscore'
Schema = mongoose.Schema

exports.register_model = (mongoose) ->
  Being = new Schema
    species:
      type: Schema.Types.ObjectId
      ref: 'Species'
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
    genes:
      type: Array
      default: -> (('000000'.replace /0/g, ->  (~ ~(Math.random() * 16)).toString(16).toUpperCase()) for i in [1..128])
    living: {type: Boolean, default: true}
    children: [type: Schema.Types.ObjectId, ref: 'Being']
    parents: [type: Schema.Types.ObjectId, ref: 'Being']
    spouses: [type: Schema.Types.ObjectId, ref: 'Being']

  Being.methods.marry  = (spouse) ->
    @spouses.push spouse.id

  Being.methods.divorce = (spouse) ->
    @spouses = _.filter @spouses, (s) -> s == spouse.id

  Being.methods.die = ->
    @living = false

  #
  # Match the expression against the genetic code of the being.
  #
  # The way this works is that the Genetic model has gene expressions,
  # like 'A0' or '622' which will match against the genes of the
  # being. The more often the string matches, the more important that
  # expression becomes.
  #
  Being.methods.express = (exps) ->
    result = {}
    exps ?= @species.expression
    _.each exps, (value, key) =>
      unless _.isArray(value)
        result[key] = @express value
      else
        _.each value, (expression) =>
          regexp = new RegExp(String(expression), 'g')
          matches = @genes.join('').match(regexp)
          result[key] = if matches? then matches.length else 0
    result


  mongoose.model 'Being', Being
