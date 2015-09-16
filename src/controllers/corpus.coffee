_ = require 'underscore'

exports.getCorpora = (Corpus) ->
  (req, res, next) ->
    Corpus.find (err, data) ->
      res.send data

exports.getCorpus = (Corpus) ->
  (req, res, next) ->
    Corpus.findOne {_id: req.params.id }
      .exec (err, corpus) ->
        res.send corpus

exports.deleteCorpus = (Corpus) ->
  (req, res, next) ->
    Corpus.remove {_id: req.params.id},  (err, data) ->
      res.send 204

exports.deleteCorpora = (Corpus) ->
  (req, res, next) ->
    Corpus.remove {},  (err, data) ->
      res.send 204

exports.updateCorpus = (Corpus) ->
  (req, res, next) ->
    Corpus.findOneAndUpdate {_id: req.params.id },
      name: req.params.name
      language: req.params.language
      lookback: req.params.lookback
      (err, data) ->
        res.send data

exports.createCorpus = (Corpus) ->
  (req, res, next) ->
    Corpus.create
      name: req.params.name
      language: req.params.language
      lookback: req.params.lookback
      (err, corpus) ->
        res.send corpus
