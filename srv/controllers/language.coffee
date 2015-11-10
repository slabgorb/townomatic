_ = require 'underscore'

exports.parse = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        language.parse()
        language.save()
        res.send language.histogram

exports.glossary = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        language.parse() unless _.keys(language.histogram).length > 0
        language.makeGlossary() unless language.glossary.length > 0
        language.save()
        res.send language.glossary

exports.clearGlossary = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        language.glossary = []
        language.save()
        res.send language

exports.translate = (Language) ->
  (req, res, next) ->
    if req.params.body?
      Language.findOne {_id: req.params.id }
        .exec (err, language) ->
          res.send language.translate(req.params.body)

exports.untranslate = (Language) ->
  (req, res, next) ->
    if req.params.body?
      Language.findOne {_id: req.params.id }
        .exec (err, language) ->
          res.send language.untranslate(req.params.body)

exports.endings = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        res.send language.endings(req.query.filter)

exports.createLanguage = (Language) ->
  (req, res, next) ->
    Language.create
      name: req.params.name
      corpora: req.params.corpora
      language: req.params.language
      lookback: req.params.lookback
      (err, language) ->
        res.send language

exports.download = (Language) ->
  (req, res, next) ->
    Language.findOne {_id: req.params.id }

exports.getLanguages = (Language) ->
  (req, res, next) ->
    Language.find (err, languages) ->
      res.send _.map(languages, (language) -> _.pick(language, 'name', 'lookback', 'minWordLength', 'maxWordLength', 'corpora', '_id'))

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
      language: req.params.language    Language.findOne {_id: req.params.id }
      .exec (err, language) ->
        res.send language.translate(req.params.body)
