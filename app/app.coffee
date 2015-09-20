class Townomatic.App
  constructor: ->
    @logger = new Townomatic.logger()
    @router = new Townomatic.Router({logger: @logger})

  initialize: ->
    Backbone.history.start()
    @router.navigate('corpora', {trigger: true});

class Townomatic.Router extends Backbone.Router


  routes:
    "": "home"
    "species": "speciesList"
    "beings/:species": "beingsList"
    "being/:id": "being"
    "corpora": "corpusList"
    "corpus/:id": "corpus"



  initialize: (options) ->
    @logger = options.logger
    @logger.debug "starting router", @routesendGroup

  execute: (callback, args, name) ->
    @logger.debug "executing", callback, args, name
    callback.call(@)

  home: ->
    @logger.debug "route: home"
    @view = new Townomatic.SpeciesListView({logger: @logger})
    @logger.debug

  corpusList: ->
    @logger.debug 'route: corpus'
    @view = new Townomatic.CorpusListView({logger: @logger})


  species: ->
    @logger.debug "route: species"
    collection = new Townomatic.SpeciesCollection({logger: @logger})
    view = new Townomatic.SpeciesCollectionView({logger: @logger})

  being: (id) ->
    @logger.debug "route: being #{id}"
    model = new Townomatic.BeingModel({id: id, logger: @logger})
    view = new Townomatic.BeingView({model: @model, logger: @logger})

  beings: (species) ->
    @logger.debug "route: beings"
    collecton = new Townomatic.BeingsCollection({species: species, logger: @logger})
    view = new Townomatic.BeingsCollectionView({collection: @collection, logger: @logger})

$ ->
  app = new Townomatic.App()
  app.initialize()
