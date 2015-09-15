_ = require 'underscore'

exports.getCommunities = (Community) ->
  (req, res, next) ->
    mongoose.models.Community.find (err, data) ->
      res.send data


exports.getCommunity = (Community) ->
  (req, res, next) ->
    mongoose.models.Community.findOne {_id: req.params.id }, (err, data) ->
      res.send data

exports.deleteCommunity = (Community) ->
  (req, res, next) ->
    mongoose.models.Community.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.updateCommunity = (Community) ->
  (req, res, next) ->
    mongoose.models.Community.findOneAndUpdate {_id: req.params.id },
      name: req.params.name
      (err, data) ->
        res.send data


exports.createCommunity = (Community) ->
  (req, res, next) ->
    mongoose.models.Community.create
      name: req.params.name
      (err, data) ->
        res.send data
