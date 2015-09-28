_ = require 'underscore'

exports.getCommunities = (Community) ->
  (req, res, next) ->
    Community.find (err, data) ->
      res.send data


exports.getCommunity = (Community) ->
  (req, res, next) ->
    Community.findOne {_id: req.params.id }, (err, data) ->
      res.send data

exports.deleteCommunity = (Community) ->
  (req, res, next) ->
    Community.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.updateCommunity = (Community) ->
  (req, res, next) ->
    Community.findOneAndUpdate {_id: req.params.id },
      name: req.params.name
      "colors.main": req.params.colors.main
      "colors.secondary": req.params.colors.secondary
      icon: req.params.icon
      (err, data) ->
        res.send data


exports.createCommunity = (Community) ->
  (req, res, next) ->
    console.log req.params
    Community.create
      name: req.params.name
      "colors.main": req.params.colors.main
      "colors.secondary": req.params.colors.secondary
      icon: req.params.icon
      (err, data) ->
        res.send data
