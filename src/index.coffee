http = require 'http'
mongoose = require 'mongoose'
config = require './config'
restify = require 'restify'
cors = require('cors');
fs = require 'fs'
_ = require 'underscore'
staticServer = require('node-static')

BACKEND_PORT = 8082
FRONTEND_PORT = 8080

server = restify.createServer()
server.use restify.bodyParser()
#server.use cors
server.use restify.fullResponse()

_.each ['species', 'being', 'community'], (file) ->
  require("./models/#{file}").register_model(mongoose)
  require("./routes/#{file}").register_routes(mongoose, server)

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
