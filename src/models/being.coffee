_ = require 'underscore'

exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
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
    occupation:
      type: Schema.Types.ObjectId
      ref: 'Occupation'
    language:
      type: Schema.Types.ObjectId
      ref: 'Language'
    age:
      type: Number
      min: 0
      default: 0
    genes:
      type: Array
      default: -> (('000000'.replace /0/g, ->  (~ ~(Math.random() * 16)).toString(16).toUpperCase()) for i in [1..128])
    living: {type: Boolean, default: true}
    children: [{type: Schema.Types.ObjectId, ref: 'Being'}]
    parents: [{type: Schema.Types.ObjectId, ref: 'Being'}]
    spouses: [{type: Schema.Types.ObjectId, ref: 'Being'}]
    expression: Schema.Types.Mixed

  Being.methods.marry  = (spouse) ->
    @spouses.push spouse.id
    @save()

  Being.methods.divorce = (spouse) ->
    @spouses = _.filter @spouses, (s) -> s == spouse.id
    @save()

  Being.methods.die = ->
    @living = false
    @save()

  Being.statics.findByName = (first, last, callback) ->
     mongoose.models.Being.findOne { 'name.first': first, 'name.last':last }, callback


  Being.statics.reproduce = (parent, mate, firstName, gender) ->
    genes = _.sample (_.flatten [parent.genes, mate.genes]), parent.genes.length
    child = new mongoose.models.Being
      name:
        first: firstName
        last: parent.name.last
      species: parent.species
      language: parent.language
      gender: gender
      age: 0
      genes: genes
      living: true
      children: []
      parents: [parent, mate]
      spouses: []
    child.save()
    parent.children.push child
    mate.children.push child
    child



  Being.methods.siblings = ->
    siblings = []
    _.each @parents, (parentId) ->
      mongoose.models.Being.findOne({ _id: parentId }).exec (error, parent) ->
        _.each parent.children, (child) ->
          siblings.push child.id
    _.uniq(siblings)

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
    @expression = result
    @save()
    @expression


  mongoose.model 'Being', Being
