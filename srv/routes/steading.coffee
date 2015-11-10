controller = require '../controllers/steading'


exports.register_routes = (mongoose, server) ->
  server.get '/steadings/:id', controller.getSteading(mongoose.models.Steading)
  server.get '/steadings', controller.getSteadings(mongoose.models.Steading)
  server.del '/steadings/:id', controller.deleteSteading(mongoose.models.Steading)
  server.post '/steadings', controller.createSteading(mongoose.models.Steading)
  server.post '/steadings/:id', controller.updateSteading(mongoose.models.Steading)
  server.put '/steadings/:id', controller.updateSteading(mongoose.models.Steading)
