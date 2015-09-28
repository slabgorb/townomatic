_ = require 'underscore'

exports.parse = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        language.parse()
        language.save()


exports.getLanguages = (Language) ->
  (req, res, next) ->
    Language.find (err, data) ->
      res.send data

exports.getLanguage = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        res.send language

exports.deleteLanguage = (Language) ->
  (req, res, next) ->
    Language.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.deleteLanguages = (Language) ->
  (req, res, next) ->
    Language.remove {},  (err, data) ->
      res.send 204

exports.updateLanguage = (Language) ->
  (req, res, next) ->
    Language.findOneAndUpdate {_id: req.params.id },
      name: req.params.name
      language: req.params.language
      lookback: req.params.lookback
      (err, data) ->
        res.send data

exports.createLanguage = (Language) ->
  (req, res, next) ->
    Language.create
      name: req.params.name
      corpora: req.params.corpora
      language: req.params.language
      lookback: req.params.lookback
      (err, language) ->
        res.send language
