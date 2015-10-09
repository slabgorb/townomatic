_ = require 'underscore'
fs = require 'fs'
exports.getCorpora = ->
  (req, res, next) ->
    res.send _.map(_.filter( fs.readdirSync("corpora"), (corpus) -> corpus.match( /corpus/ )), (corpus) ->  { name: _.first corpus.split('.') })
