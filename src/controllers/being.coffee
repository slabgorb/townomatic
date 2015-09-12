mongoose = require 'mongoose'
_ = require 'underscore'

getBeings = (req, res, next) ->
  mongoose.models.Being.find (err, data) ->
    res.send data

getBeing = (req, res, next) ->
  mongoose.models.Being.findOne {_id: req.params.id }, (err, data) ->
    res.send data

deleteBeing = (req, res, next) ->
  mongoose.models.Being.remove {_id: req.params.id},  (err, data) ->
    res.send 204

deleteBeings = (req, res, next) ->
  mongoose.models.Being.remove {},  (err, data) ->
    res.send 204

updateBeing = (req, res, next) ->
  mongoose.models.Being.findOneAndUpdate {_id: req.params.id },
    {
      name: {first: req.params.name.first, last: req.params.name.name}
      age: req.params.age
      occupation: req.params.occupation
      gender: req.params.gender
      genetics: req.params.genetics
    }, (err, data) ->
      res.send data

createBeing = (req, res, next) ->

  genetics = mongoose.models.Genetics.findOne({species: req.params.species})
 # genes =  (new mongoose.models.Gene for i in [0..genetics.geneLength])
  genes =  (new mongoose.models.Gene for i in [0..12])
  console.log genetics.species
  console.log genetics.geneLength
  console.log genes
  console.log req.params.species

  mongoose.models.Being.create
    species: req.params.species
    name: {first: req.params.name.first, last: req.params.name.last}
    age: req.params.age
    occupation: req.params.occupation
    gender: req.params.gender
    genes: genes
    (err, being) ->
      res.send being


exports.register_routes = (server) ->
  server.get '/beings/:id', getBeing
  server.get '/beings', getBeings
  server.del '/beings', deleteBeings
  server.del '/beings/:id', deleteBeing
  server.post '/beings', createBeing
  server.post '/beings/:id', updateBeing
