class Townomatic.App extends Backbone.Router
  routes:
    "": "home"
    "species": "species"
    "/beings/:species": "beings"
    "/being/:id": "being"

  initialize: (options) ->
    console.log "starting router", @routes

  # execute: (callback, args, name) ->
  #   console.log "executing", callback, args, name

  home: ->
    console.log "route: home"
    @view = new Townomatic.SpeciesListView()
    console.log @view


  species: ->
    console.log "route: species"
    collection = new Townomatic.SpeciesCollection()
    view = new Townomatic.SpeciesCollectionView()

  being: (id) ->
    console.log "route: being #{id}"
    model = new Townomatic.BeingModel({id: id})
    view = new Townomatic.BeingView({model: @model})

  beings: (species) ->
    console.log "route: beings"
    collecton = new Townomatic.BeingsCollection({species: species})
    view = new Townomatic.BeingsCollectionView({collection: @collection})

$ ->
  app = new Townomatic.App
  Backbone.history.start()
