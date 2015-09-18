_ = require 'underscore'
fs = require 'fs'

corpora = _.uniq(_.map fs.readdirSync('corpora'), (file) -> file.split('.')[0])

exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Corpus = new Schema
    name: String
    lookback:
      type: Number
      default: 2
      min: 1
      max: 5
    language: [ {type: String, enum: corpora} ]
    histogram: Schema.Types.Mixed
    startToken:
      type: String
      default: '^'
    endToken:
      type: String
      default: '_'

  Corpus.methods.total = (key) ->
    _.reduce @histogram[key], ((memo, h) -> memo += h), 0


  Corpus.methods.parse = ->
    histo = {}
    key = @startKey()
    _.each @language, (language) =>
      corpusText = fs.readFileSync("corpora/#{language}.corpus", 'utf8')
      _.each corpusText, (char) ->
        histo[key] ?= {}
        histo[key][char] ?= 0
        histo[key][char] += 1
        key.push char
        key.shift()
    @histogram = histo

  Corpus.methods.choice = (key, selection) ->
    position = 0
    ary = _.map(@histogram[key], (v, k) -> [k, v])
    match = _.find ary, (pair) ->
      position += _.last(pair)
      position > selection
    _.first match

  Corpus.methods.startKey = ->
     new Array(@lookback + 1).join(@startToken).split('')

  Corpus.methods.word = ->
    word = ''
    char = ''
    key = @startKey()
    word = while _.first(char) != @endToken
      selection = Math.random * @total(key)
      char = @choice(key, selection)
      key.push char
      key.shift()


  mongoose.model 'Corpus', Corpus
