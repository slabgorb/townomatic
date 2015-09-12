mongoose = require 'mongoose'
_ = require 'underscore'


getGenetics = (req, res, next) ->
  if req.params.species?
    mongoose.models.Genetics.findOne {species: req.params.species }, (err, data) ->
      res.send data
  else
    mongoose.models.Genetics.find (err, data) ->
      res.send data

deleteGenetics = (req, res, next) ->
  _.noop()

createGenetics = (req, res, next) ->
  mongoose.models.Genetics.create
    species: req.params.species
    expression: req.params.expression
    (err, data) ->
      res.send data

updateGenetics = (req, res, next) ->
  mongoose.models.findOneAndUpdate {species: req.params.species },
    expression: req.params.expression
    (err, genetics) ->
      res.send genetics

exports.register_routes = (server) ->
  server.get '/genetics/:species', getGenetics
  server.get '/genetics', getGenetics
  server.del '/genetics', deleteGenetics
  server.del '/genetics/:species', deleteGenetics
  server.post '/genetics', createGenetics
  server.post '/genetics/:species', updateGenetics
