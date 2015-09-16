mongoose = require 'mongoose'
config = require '../src/config'

delete mongoose.connection.models['Species']
delete mongoose.connection.models['Being']
require("../src/models/species").register_model(mongoose)
require("../src/models/being").register_model(mongoose)

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
