class Townomatic.App extends Backbone.Router
  routes:
    "": "home"
    "/species": "speciesList"
    "/beings/:species": "beingsList"
    "/being/:id": "being"
    "/corpora": "corpusList"
    "/corpus/:id": "corpus"



  initialize: (options) ->
    @logger = Townomatic.logger
    @logger.debug "starting router", @routes

  # execute: (callback, args, name) ->
  #   console.log "executing", callback, args, name

  home: ->
    console.log "route: home"
    @view = new Townomatic.SpeciesListView()
    console.log @view

  corpusList: ->
    @logger.debug 'route: corpus'

  species: ->
    @logger.debug "route: species"
    collection = new Townomatic.SpeciesCollection()
    view = new Townomatic.SpeciesCollectionView()

  being: (id) ->
    @logger.debug "route: being #{id}"
    model = new Townomatic.BeingModel({id: id})
    view = new Townomatic.BeingView({model: @model})

  beings: (species) ->
    console.log "route: beings"
    collecton = new Townomatic.BeingsCollection({species: species})
    view = new Townomatic.BeingsCollectionView({collection: @collection})

$ ->
  app = new Townomatic.App
  Backbone.history.start()
