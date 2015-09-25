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
    "beings": "beingList"
    "being/:id": "being"
    "languages": "languageList"
    "language/:id": "language"
    "communities": "communityList"
    "community/:id": "community"

  initialize: (options) ->
    @logger = options.logger
    @logger.debug "starting router", @routes

  execute: (callback, args, name) ->
    @logger.debug "executing", callback, args, name
    @view.remove() if @view?
    callback.call(@)

  home: ->
    @logger.debug "route: home"
    @view = new Townomatic.HomeView({logger: @logger})

  languageList: ->
    @logger.debug 'route: language list'
    @view = new Townomatic.LanguageListView({logger: @logger})

  species: ->
    @logger.debug "route: species"

  speciesList: ->
    @logger.debug "route: speciesList"
    view = new Townomatic.SpeciesListView({logger: @logger})

  being: (id) ->
    @logger.debug "route: being #{id}"
    model = new Townomatic.BeingModel({id: id, logger: @logger})
    view = new Townomatic.BeingView({model: @model, logger: @logger})

  beingList: () ->
    @logger.debug "route: being list"
    view = new Townomatic.BeingListView({logger: @logger})

  communityList: () ->
    @logger.debug "route: communities list"
    view = new Townomatic.CommunityListView({logger: @logger})

$ ->
  app = new Townomatic.App()
  app.initialize()
