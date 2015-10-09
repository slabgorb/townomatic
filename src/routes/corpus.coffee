controller = require '../controllers/corpus'

exports.register_routes = (server) ->
  server.get '/corpora/', controller.getCorpora()
