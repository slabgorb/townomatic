controller = require '../controllers/corpus'


exports.register_routes = (mongoose, server) ->
  server.get '/corpora/:id', controller.getCorpus(mongoose.models.Corpus)
  server.get '/corpora', controller.getCorpora(mongoose.models.Corpus)
  server.del '/corpora/:id', controller.deleteCorpus(mongoose.models.Corpus)
  server.post '/corpora', controller.createCorpus(mongoose.models.Corpus)
  server.post '/corpora/:id', controller.updateCorpus(mongoose.models.Corpus)
