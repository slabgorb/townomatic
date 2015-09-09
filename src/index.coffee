http = require 'http'
mongoose = require 'mongoose'
config = require './config'
restify = require 'restify'
fs = require 'fs'
_ = require 'underscore'

PORT = 8082


_.each ['being', 'community'], (file) ->
  require("./models/#{file}").register_model(mongoose)

mongoose.connect config.creds.mongodb_uri

server = restify.createServer();
server.use restify.bodyParser()

getBeings = (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Headers', 'X-Requested-With'
  mongoose.models.Being.find (err, data) ->
    res.send data

getBeing = (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Headers', 'X-Requested-With'
  console.log(req.params.id)
  mongoose.models.Being.find {_id: req.params.id }, (err, data) ->
    res.send data


deleteBeing = (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Headers', 'X-Requested-With'
  res.header 'Access-Control-Allow-Methods', '*'
  mongoose.models.Being.remove {_id: req.params.id},  (err, data) ->
    res.send 204


postBeing = (req, res, next) ->
    res.header 'Access-Control-Allow-Origin', '*'
    res.header 'Access-Control-Allow-Headers', 'X-Requested-With'
    mongoose.models.Being.create
      first_name: req.params.first_name
      last_name: req.params.last_name
      age: req.params.age
      (err, being) ->
        res.send being

server.get '/beings/:id', getBeing
server.get '/beings', getBeings
server.del '/beings', deleteBeing
server.post '/beings', postBeing


server.listen PORT
