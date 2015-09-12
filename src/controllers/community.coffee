mongoose = require 'mongoose'
_ = require 'underscore'

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

exports.register_routes = (server) ->
  server.get '/communities/:id', getCommunity
  server.get '/communities', getCommunities
  server.del '/communities/:id', deleteCommunity
  server.post '/communities', createCommunity
  server.post '/communities/:id', updateCommunity
