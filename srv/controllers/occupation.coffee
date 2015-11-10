_ = require 'underscore'

exports.getOccupations = (Occupation) ->
  (req, res, next) ->
    Occupation.find (err, data) ->
      res.send data

exports.getOccupation = (Occupation) ->
  (req, res, next) ->
    Occupation.findOne {_id: req.params.id }
      .exec (err, data) ->
        res.send data
