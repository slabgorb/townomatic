http = require 'http'
mongoose = require 'mongoose'
config = require './config'
restify = require 'restify'
fs = require 'fs'
_ = require 'underscore'
staticServer = require('node-static')

BACKEND_PORT = 8082
FRONTEND_PORT = 8080


_.each ['being', 'community'], (file) ->
  require("./models/#{file}").register_model(mongoose)

mongoose.connect config.creds.mongodb_uri

server = restify.createServer()
server.use restify.bodyParser()
server.use restify.CORS()
server.use restify.fullResponse()

getCommunities = (req, res, next) ->
  mongoose.models.Community.find (err, data) ->
    res.send data


getCommunity = (req, res, next) ->
  mongoose.models.Community.findOne {_id: req.params.id }, (err, data) ->
    res.send data

deleteCommunity = (req, res, next) ->
  mongoose.models.Community.remove {_id: req.params.id},  (err, data) ->
    res.send 204


updateCommunity = (req, res, next) ->
  mongoose.models.Community.findOneAndUpdate {_id: req.params.id },
    {
      name: req.params.name
    }, (err, data) ->
      res.send data


createCommunity = (req, res, next) ->
  mongoose.models.Community.create
    name: req.params.name
    (err, data) ->
      res.send data

getBeings = (req, res, next) ->
  mongoose.models.Being.find (err, data) ->
    res.send data

getBeing = (req, res, next) ->
  mongoose.models.Being.findOne {_id: req.params.id }, (err, data) ->
    res.send data

deleteBeing = (req, res, next) ->
  mongoose.models.Being.remove {_id: req.params.id},  (err, data) ->
    res.send 204

updateBeing = (req, res, next) ->
  mongoose.models.Being.findOneAndUpdate {_id: req.params.id },
    {
      first_name: req.params.first_name
      last_name: req.params.last_name
      age: req.params.age
      occupation: req.params.occupation
      gender: req.params.gender
      genetics: req.params.genetics
    }, (err, data) ->
      res.send data

createBeing = (req, res, next) ->
  mongoose.models.Being.create
    first_name: req.params.first_name
    last_name: req.params.last_name
    age: req.params.age
    occupation: req.params.occupation
    gender: req.params.gender
    genetics: req.params.genetics
    (err, being) ->
      res.send being

server.get '/beings/:id', getBeing
server.get '/beings', getBeings
server.del '/beings', deleteBeing
server.post '/beings', createBeing
server.post '/beings/:id', updateBeing

server.get '/communities/:id', getCommunity
server.get '/communities', getCommunities
server.del '/communities', deleteCommunity
server.post '/communities', createCommunity
server.post '/communities/:id', updateCommunity

server.listen BACKEND_PORT


file = new (staticServer.Server)('./public')
require('http').createServer((request, response) ->
  request.addListener('end', ->
    file.serve request, response
    return
  ).resume()
  return
).listen FRONTEND_PORT
