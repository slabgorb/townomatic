_ = require 'underscore'

exports.getSteadings = (Steading) ->
  (req, res, next) ->
    Steading.find (err, data) ->
      res.send data


exports.getSteading = (Steading) ->
  (req, res, next) ->
    Steading.findOne {_id: req.params.id }, (err, data) ->
      res.send data

exports.deleteSteading = (Steading) ->
  (req, res, next) ->
    Steading.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.updateSteading = (Steading) ->
  (req, res, next) ->
    Steading.findOneAndUpdate {_id: req.params.id },
      name: req.params.name
      "colors.main": req.params.colors.main
      "colors.secondary": req.params.colors.secondary
      icon: req.params.icon
      description: req.params.description
      (err, data) ->
        res.send data


exports.createSteading = (Steading) ->
  (req, res, next) ->
    console.log req.params
    Steading.create
      name: req.params.name
      "colors.main": req.params.colors.main
      "colors.secondary": req.params.colors.secondary
      icon: req.params.icon
      description: req.params.description
      (err, data) ->
        res.send data
