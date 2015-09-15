controller = require '../controllers/community'


exports.register_routes = (mongoose, server) ->
  server.get '/communities/:id', controller.getCommunity(mongoose.models.Community)
  server.get '/communities', controller.getCommunities(mongoose.models.Community)
  server.del '/communities/:id', controller.deleteCommunity(mongoose.models.Community)
  server.post '/communities', controller.createCommunity(mongoose.models.Community)
  server.post '/communities/:id', controller.updateCommunity(mongoose.models.Community)
