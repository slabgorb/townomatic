mongoose = require 'mongoose'
_ = require 'underscore'


getSpecies = (req, res, next) ->
  if req.params.species?
    mongoose.models.Species.findOne {species: req.params.species }, (err, data) ->
      res.send data
  else
    mongoose.models.Species.find (err, data) ->
      res.send data

deleteSpecies = (req, res, next) ->
  _.noop()

createSpecies = (req, res, next) ->
  mongoose.models.Species.create
    species: req.params.species
    geneLength: req.params.geneLength
    expression: req.params.expression
    (err, data) ->
      res.send data

updateSpecies = (req, res, next) ->
  mongoose.models.findOneAndUpdate {species: req.params.species },
    expression: req.params.expression
    geneLength: req.params.geneLength
    (err, species) ->
      res.send species

exports.register_routes = (server) ->
  server.get '/species/:species', getSpecies
  server.get '/species', getSpecies
  server.del '/species', deleteSpecies
  server.del '/species/:species', deleteSpecies
  server.post '/species', createSpecies
  server.post '/species/:species', updateSpecies
