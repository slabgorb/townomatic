mongoose = require 'mongoose'
_ = require 'underscore'
config = require '../src/config'


_.each ['Species', 'Being', 'Community'], (file) ->
  delete mongoose.connection.models[file]
  require("../src/models/#{file.toLowerCase()}").register_model(mongoose)


before (done) ->
  clearDB = ->
    for i of mongoose.connection.collections
      mongoose.connection.collections[i].remove ->
    done()
  if mongoose.connection.readyState == 0
    mongoose.connect config.creds.mongodb_test_uri, (err) ->
      if err
        throw err
      clearDB()
  else
    clearDB()

after (done) ->
  mongoose.disconnect()
  done()
