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
    histogram:
      type: Schema.Types.Mixed
    maxWordLength:
      type: Number
      default: 20

  Corpus.methods.total = (key) ->
    _.reduce @histogram[key], ((memo, h) -> memo += h), 0


  Corpus.methods.parse  = (lookback = 2) ->
    console.log 'parsing corpus'
    histo = {}
    add = (key, char) ->
      histo[key] ?= {}
      histo[key][char] ?= 0
      histo[key][char] += 1
    _.each @language, (language) =>
      corpusText = fs.readFileSync("corpora/#{language}.corpus", 'utf8').split("_")
      _.each corpusText, (word) =>
        key = new Array(lookback + 1).join('^').split('')
        _.each word, (char) ->
          add key,char
          key.push char
          key.shift()
        add key, "_"
    console.log 'done parsing corpus'
    @histogram = histo

  Corpus.pre 'save', (next) ->
    @parse()
    next()

  Corpus.methods.choice = (key, selection) ->
    position = 0
    ary = _.map(@histogram[key], (v, k) -> [k, v])
    match = _.find ary, (pair) ->
      position += _.last(pair)
      position > selection
    _.first match

  Corpus.methods.startKey = ->
    console.log "getting start key"
    new Array(@lookback + 1).join('^').split('')

  Corpus.methods.startKeys = ->
    _.filter(_.keys(@histogram), (k) -> _.first(k) == '^')

  Corpus.methods.word = ->
    word = ''
    char = ''
    count = 0
    key = _.sample(@startKeys()).split(',')
    while char != '_' and count < @maxWordLength
      selection = Math.floor(Math.random() * @total(key))
      char = @choice(key, selection)
      count += 1
      word += char
      key.push char
      key.shift()
    word.replace('_','')


  mongoose.model 'Corpus', Corpus
