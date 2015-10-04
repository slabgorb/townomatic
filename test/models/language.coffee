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
    language.total(['a','b']).should.equal 2210
    language.histogram[['a','b']].should.eql {
        _: 91,
        a: 91,
        b: 17,
        c: 2,
        e: 1135,
        f: 3,
        g: 60,
        h: 5,
        i: 152,
        k: 9,
        l: 335,
        n: 5,
        o: 136,
        r: 37,
        s: 55,
        t: 41,
        u: 3,
        w: 15,
        y: 1,
        z: 5,
        'î': 12
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
    language.makeGlossary()
    console.log "glossary", language.glossary
