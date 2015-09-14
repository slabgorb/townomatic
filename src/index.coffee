http = require 'http'
mongoose = require 'mongoose'
config = require './config'
restify = require 'restify'
fs = require 'fs'
_ = require 'underscore'
staticServer = require('node-static')

BACKEND_PORT = 8082
FRONTEND_PORT = 8080

server = restify.createServer()
server.use restify.bodyParser()
server.use restify.CORS()
server.use restify.fullResponse()

_.each ['species', 'being', 'community'], (file) ->
  require("./models/#{file}").register_model(mongoose)
  require("./controllers/#{file}").register_routes(server)

mongoose.connect config.creds.mongodb_uri
server.listen BACKEND_PORT

fileServer = new (staticServer.Server)('./public')

require('http').createServer((request, response) ->
  request.addListener('end', ->
    fileServer.serve request, response
    return
  ).resume()
  return
).listen FRONTEND_PORT
