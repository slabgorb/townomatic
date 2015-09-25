class Townomatic.App
  constructor: ->
    @logger = new Townomatic.logger()
    @router = new Townomatic.Router({logger: @logger})
    @header = new Townomatic.HeaderView({logger: @logger})


  initialize: ->
    Backbone.history.start()

class Townomatic.Router extends Backbone.Router


  routes:
    "": "home"
    "species": "speciesList"
    "beings/:species": "beingsList"
    "being/:id": "being"
    "languages": "languageList"
    "language/:id": "language"
    "communities": "communityList"



  initialize: (options) ->
    @logger = options.logger
    @logger.debug "starting router", @routes

  execute: (callback, args, name) ->
    @logger.debug "executing", callback, args, name
    @view.remove() if @view?
    callback.call(@)

  home: ->
    @logger.debug "route: home"

  languageList: ->
    @logger.debug 'route: languageList'
    @view = new Townomatic.LanguageListView({logger: @logger})

  species: ->
    @logger.debug "route: species"


  speciesList: ->
    @logger.debug "route: speciesList"
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
