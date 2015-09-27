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
    "being/:id": "being"
    "beings": "beingList"
    "communities": "communityList"
    "community/:id": "community"
    "language/:id": "language"
    "languages": "languageList"
    "species": "speciesList"
    "species/:id": "species"

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

  being: (id) ->
    @logger.debug "route: being #{id}"
    @model = new Townomatic.BeingModel({id: id, logger: @logger})
    @view = new Townomatic.BeingView({model: @model, logger: @logger})

  beingList: () ->
    @logger.debug "route: being list"
    @view = new Townomatic.BeingListView({logger: @logger})

  community: (id) ->
    @logger.debug 'route: community'
    @model = new Townomatic.CommunityModel({id: id, logger: @logger})
    @view = new Townomatic.CommunityView({model: @model, logger: @logger})

  communityList: () ->
    @logger.debug "route: communities list"
    @view = new Townomatic.CommunityListView({logger: @logger})

  language: (id) ->
    @logger.debug "route: language"
    @model = new Townomatic.LanguageModel({id: id, logger: @logger})
    @view = new Townomatic.LanguageView({model: @model, logger: @logger})

  languageList: ->
    @logger.debug 'route: language list'
    @view = new Townomatic.LanguageListView({logger: @logger})

  species: (id) ->
    @logger.debug "route: species"
    @model = new Townomatic.SpeciesModel({id: id, logger: @logger})
    @view = new Townomatic.SpeciesView({model: @model, logger: @logger})

  speciesList: ->
    @logger.debug "route: speciesList"
    @view = new Townomatic.SpeciesListView({logger: @logger})


$ ->
  app = new Townomatic.App()
  app.initialize()
