_ = require 'underscore'

exports.getSpecies = (Species) ->
  (req, res, next) ->
    if req.params.id?
      Species.findOne {_id: req.params.id }, (err, data) ->
        res.send data
    else
      Species.find (err, data) ->
        res.send data

exports.deleteSpecies =  (Species) ->
  (req, res, next) ->
    Species.remove {_id: req.params.id }, (err, data) ->
      res.send 204

exports.createSpecies =  (Species) ->
  (req, res, next) ->
    Species.create
      name: req.params.name
      species: req.params.species
      geneLength: req.params.geneLength
      expression: req.params.expression
      (err, data) ->
        res.send data

exports.updateSpecies =  (Species) ->
  (req, res, next) ->
    Species.findOneAndUpdate {species: req.params.species },
      name: req.params.name
      expression: req.params.expression
      geneLength: req.params.geneLength
      (err, species) ->
        res.send species
