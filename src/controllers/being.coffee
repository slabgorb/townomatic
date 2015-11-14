_ = require 'underscore'

exports.getBeings = (Being) ->
  (req, res, next) ->
    Being.find({})
      .populate('species', 'name')
      .populate('language', 'name')
      .populate('occupation', 'name')
      .exec (err, data) ->
        res.send data

exports.getBeing = (Being) ->
  (req, res, next) ->
    Being.findOne {_id: req.params.id }
      .populate('species', 'name')
      .populate('language', 'name')
      .populate('occupation', 'name')
      .exec (err, being) ->
        res.send being

exports.deleteBeing = (Being) ->
  (req, res, next) ->
    Being.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.deleteBeings = (Being) ->
  (req, res, next) ->
    Being.remove {},  (err, data) ->
      res.send 204

exports.updateBeing = (Being) ->
  (req, res, next) ->
    Being.findOneAndUpdate {_id: req.params.id },
      species: req.params.species
      name: {first: req.params.name.first, last: req.params.name.last}
      age: req.params.age
      occupation: req.params.occupation
      gender: req.params.gender
      (err, data) ->
        res.send data

exports.createBeing = (Being) ->
  (req, res, next) ->
    Being.create
      species: req.params.species
      name: {first: req.params.name.first, last: req.params.name.last}
      age: req.params.age
      occupation: req.params.occupation
      gender: req.params.gender
      genes: req.params.genes
      (err, being) ->
        console.log being
        res.send being
