utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')
request = require('supertest')

describe 'routes/being', (done) ->
  url = 'http://localhost:8082'
  it 'should save a being', ->
    body =
      name:
        first: 'Joe'
        last: 'Schmoe'
      gender: 'Male'
      occupation: 'Bum'
    request url
      .get '/beings'
      .set('Accept', 'application/json')
      .end (err, res) ->
        console.log res
      # #.send "foo"
      # .end (err, res) ->
      #   console.log res
      #   res.should.have.status "200"
      #   done()
