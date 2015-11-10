controller = require '../controllers/occupation'

exports.register_routes = (mongoose, server) ->
  server.get '/occupations', controller.getOccupations(mongoose.models.Occupation)
  server.get '/occupations/:id', controller.getOccupation(mongoose.models.Occupation)
