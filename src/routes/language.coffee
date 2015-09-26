controller = require '../controllers/language'


exports.register_routes = (mongoose, server) ->
  server.get '/languages/:id', controller.getLanguage(mongoose.models.Language)
  server.get '/languages', controller.getLanguages(mongoose.models.Language)
  server.del '/languages/:id', controller.deleteLanguage(mongoose.models.Language)
  server.post '/languages', controller.createLanguage(mongoose.models.Language)
  server.post '/languages/:id', controller.updateLanguage(mongoose.models.Language)