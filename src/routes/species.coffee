controller = require '../controllers/species'


exports.register_routes = (mongoose, server) ->
  server.get '/species/:species', controller.getSpecies(mongoose.models.Species)
  server.get '/species', controller.getSpecies(mongoose.models.Species)
  server.del '/species', controller.deleteSpecies(mongoose.models.Species)
  server.del '/species/:species', controller.deleteSpecies(mongoose.models.Species)
  server.post '/species', controller.createSpecies(mongoose.models.Species)
  server.post '/species/:species', controller.updateSpecies(mongoose.models.Species)
