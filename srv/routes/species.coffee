controller = require '../controllers/species'

exports.register_routes = (mongoose, server) ->
  server.get '/species/:id', controller.getSpecies(mongoose.models.Species)
  server.get '/species', controller.getSpecies(mongoose.models.Species)
  server.del '/species', controller.deleteSpecies(mongoose.models.Species)
  server.del '/species/:id', controller.deleteSpecies(mongoose.models.Species)
  server.post '/species', controller.createSpecies(mongoose.models.Species)
  server.post '/species/:id', controller.updateSpecies(mongoose.models.Species)
  server.put '/species/:id', controller.updateSpecies(mongoose.models.Species)
