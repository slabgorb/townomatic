_ = require 'underscore'
fs = require 'fs'


corpusData =  (corpus) ->
  stats = fs.statSync("corpora/#{corpus}")
  c =  _.first corpus.split('.')
  { name: c , id: c, size: stats['size'] }


exports.getCorpora = ->
  (req, res, next) ->
    res.send _.map(_.filter( fs.readdirSync("corpora"), (corpus) -> corpus.match( /corpus/ )), (corpus) ->
      corpusData(corpus)
    )

exports.getCorpus = ->
  (req, res, next) ->
    corpora = _.map(_.filter( fs.readdirSync("corpora"), (corpus) -> corpus.match( /corpus/ )), (corpus) ->  corpusData(corpus) )
    res.send _.find(corpora, (corpus) -> corpus.id == req.params.id)
