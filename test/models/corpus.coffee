utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')

describe "models/corpus", ->
  corpus = new mongoose.models.Corpus
    language: ['french','german']
    lookback: 2
  corpus.parse()
  corpus.save()

  it 'creates a histogram', ->
    corpus.histogram.should.exist
    corpus.total(['a','b']).should.equal 2210
    corpus.histogram[['a','b']].should.eql {
        $: 91,
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
