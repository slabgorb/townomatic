_ = require 'underscore'
fs = require 'fs'
words = require('./words')
corpora = _.uniq(_.map fs.readdirSync('corpora'), (file) -> file.split('.')[0])

String::isFirstCapital = ->
  /^[a-z]/i.test(@) and @charAt(0) == @charAt(0).toUpperCase()

String::capitalizeFirstLetter = ->
  @charAt(0).toUpperCase() + @slice(1)

exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Language = new Schema
    name: String
    lookback:
      type: Number
      default: 2
      min: 1
      max: 5
    corpora: [ {type: String, enum: corpora} ]
    histogram:
      type: Schema.Types.Mixed
    maxWordLength:
      type: Number
      default: 20
    minWordLength:
      type: Number
      default: 2
    glossary: [ { word: String, translation: String } ]

  Language.methods.total = (key) ->
    _.reduce @histogram[key], ((memo, h) -> memo += h), 0

  Language.methods.parse  = (lookback = 2) ->
    histo = {}
    add = (key, char) ->
      histo[key] ?= {}
      histo[key][char] ?= 0
      histo[key][char] += 1
    _.each @corpora, (corpus) =>
      languageText = fs.readFileSync("corpora/#{corpus}.corpus", 'utf8').split("_")
      _.each languageText, (word) =>
        key = new Array(lookback + 1).join('^').split('')
        _.each word, (char) ->
          add key,char
          key.push char
          key.shift()
        add key, "_"
    @histogram = histo

  Language.methods.choice = (key, selection) ->
    position = 0
    ary = _.map(@histogram[key], (v, k) -> [k, v])
    match = _.find ary, (pair) ->
      position += _.last(pair)
      position > selection
    _.first match

  Language.methods.startKey = ->
    new Array(@lookback + 1).join('^').split('')

  Language.methods.startKeys = ->
    _.filter(_.keys(@histogram), (k) -> _.first(k) == '^')

  Language.methods.makeGlossary = ->
    _.each words, (translation) =>
      @word(translation)
    @save()


  Language.methods.endings = (filter) ->
    ends = _.compact(_.map @histogram, (values, key) -> key if  (('_' of values) and not ('^' in key))).sort()
    if filter?
      _.filter(ends, (ending) -> filter in ending)
    else
      ends


  Language.methods.translation = (word) ->
    found = _.find(@glossary, (g) -> g.word == word)
    if found? then found.translation else word

  #
  # Create a new word or return an existing word
  #
  Language.methods.word  = (translation, ending = null) ->
    translation = translation.toLowerCase()
    found = _.find(@glossary, (g) -> g.translation == translation)
    return found.word if found?
    word = ''
    while word.length < @minWordLength
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
      word = word.replace('_','')
    @glossary.push {word: word, translation: translation}
    return word

  # translate the provided text into words in the language. If any
  # words are undefined, create them on the fly in the language and
  # store them
  Language.methods.translate = (body) ->
    translated = _.map body.split(/(\W)/), (wordToTranslate) =>
      if wordToTranslate.match(/\w/)
        word = @word(wordToTranslate)
        if wordToTranslate.isFirstCapital()
          word = word.capitalizeFirstLetter() if word.length > 0
        word
      else
        wordToTranslate
    @save()
    translated.join('')

  Language.methods.untranslate = (body) ->
    translated = _.map body.split(/(\s|[!@$%^&*\(\)\[\]|{}<>?,.;':"~`])/), (wordToTranslate) =>
      word = @translation(wordToTranslate)
      if wordToTranslate.isFirstCapital()
        word = word.capitalizeFirstLetter() if word.length > 0
      word
    @save()
    translated.join('')


  mongoose.model 'Language', Language
