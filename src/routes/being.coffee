controller = require '../controllers/being'

exports.register_routes = (mongoose, server) ->
  server.get '/beings/:id', controller.getBeing(mongoose.models.Being)
  server.get '/beings', controller.getBeings(mongoose.models.Being)
  server.del '/beings', controller.deleteBeings(mongoose.models.Being)
  server.del '/beings/:id', controller.deleteBeing(mongoose.models.Being)
  server.post '/beings', controller.createBeing(mongoose.models.Being)
  server.post '/beings/:id', controller.updateBeing(mongoose.models.Being)
