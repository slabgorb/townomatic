utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')

describe "models/language", ->
  language = new mongoose.models.Language
    name: 'test'
    corpora: ['french','german']
    lookback: 2
  language.save()

  it 'creates a histogram', () ->
    language.histogram.should.exist
    language.total(['a','b']).should.equal 2061
    language.histogram[['a','b']].should.eql {
      _: 91,
      a: 74,
      b: 17,
      c: 2,
      e: 1131,
      f: 3,
      g: 60,
      h: 5,
      i: 122,
      k: 9,
      l: 276,
      n: 5,
      o: 107,
      r: 33,
      s: 52,
      t: 41,
      u: 2,
      w: 15,
      y: 1,
      z: 5,
      'î': 10
    }


  it 'chooses from a histogram key', ->
    language.choice(['a','b'], 1).should.equal 'i'

  it 'makes a start key', ->
    language.startKey().should.eql ['^','^']

  it 'has a default max length', ->
    language.maxWordLength.should.equal 20

  it 'makes a word', ->
    language.word('foo').should.not.eql ''
    _.first(language.glossary).should.not.be_nil

  it 'makes a glossary', ->
    (language.glossary.length > 900).should.be_true


  it 'translates a phrase', ->
    what = _.find(language.glossary, (g) -> g.translation == 'what').word
    language.translate('what, what, what!').should.equal "#{what}, #{what}, #{what}!"
    glossaryLength = language.glossary.length
    language.translate('notaword anothernotword')
    language.glossary.length.should.equal glossaryLength + 2
