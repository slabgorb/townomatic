http = require 'http'
mongoose = require 'mongoose'
config = require './config'
restify = require 'restify'
fs = require 'fs'
_ = require 'underscore'
staticServer = require('node-static')

BACKEND_PORT = 8082
FRONTEND_PORT = 8081

restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');

server = restify.createServer()
server.use restify.bodyParser()
server.use restify.CORS()
server.use restify.fullResponse()
server.pre(restify.pre.sanitizePath());

_.each ['species', 'being', 'community', 'language'], (file) ->
  require("./models/#{file}").register_model(mongoose)
  require("./routes/#{file}").register_routes(mongoose, server)

_.each ['corpus'], (file) ->
  require("./routes/#{file}").register_routes(server)

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
