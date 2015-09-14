mongoose = require 'mongoose'
_ = require 'underscore'

getBeings = (req, res, next) ->
  mongoose.models.Being.find (err, data) ->
    res.send data

getBeing = (req, res, next) ->
  mongoose.models.Being.findOne {_id: req.params.id }
    .populate('species')
    .exec (err, being) ->
      console.log being
      being.setValue('expression', being.express())
      res.send being

deleteBeing = (req, res, next) ->
  mongoose.models.Being.remove {_id: req.params.id},  (err, data) ->
    res.send 204

deleteBeings = (req, res, next) ->
  mongoose.models.Being.remove {},  (err, data) ->
    res.send 204

updateBeing = (req, res, next) ->
  mongoose.models.Being.findOneAndUpdate {_id: req.params.id },
    {
      species: req.params.species
      name: {first: req.params.name.first, last: req.params.name.name}
      age: req.params.age
      occupation: req.params.occupation
      gender: req.params.gender
    }, (err, data) ->
      res.send data

createBeing = (req, res, next) ->

  mongoose.models.Being.create
    species: req.params.species
    name: {first: req.params.name.first, last: req.params.name.last}
    age: req.params.age
    occupation: req.params.occupation
    gender: req.params.gender
    (err, being) ->
      res.send being


exports.register_routes = (server) ->
  server.get '/beings/:id', getBeing
  server.get '/beings', getBeings
  server.del '/beings', deleteBeings
  server.del '/beings/:id', deleteBeing
  server.post '/beings', createBeing
  server.post '/beings/:id', updateBeing
