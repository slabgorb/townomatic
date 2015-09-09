http = require 'http'
mongoose = require 'mongoose'
config = require './config'

PORT = 8080

beingSchema = mongoose.Schema
  first_name: String
  last_name: String
  age: Number

beingSchema.methods.ageOneYear = ->
  @age += 1
  console.log('aging')
  "#{@first_name} is now #{@age}"

Being = mongoose.model 'being', beingSchema

adam = new Being
  first_name: 'Adam'
  last_name: 'Man'
  age: 1

mongoose.connect config.creds.mongodb_uri
db = mongoose.connection
db.on 'error', console.error.bind(console, 'connection error:')
db.once 'open', (callback) ->
    return



http.createServer( (request, response) ->
  request.resume()
  request.on 'end', ->
    console.log('request end')
    response.writeHead 200, 'Content-Type': 'text/plain'
    response.end adam.ageOneYear()
    return
  return
).listen PORT
