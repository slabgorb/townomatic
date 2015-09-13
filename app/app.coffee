class Townomatic.App extends Backbone.Router
  routes:
    "/beings/:species": "beings"
    "/being/:id": "being"

  being: (id) ->
    console.log "route: being #{id}"
    model = new Townomatic.BeingModel({id: id})
    view = new Townomatic.BeingView({model: @model})

  beings: (species) ->
    console.log "route: beings"
    collecton = new Townomatic.BeingsCollection({species: species})
    view = new Townomatic.BeingsCollectionView({collection: @collection})


app = new Townomatic.App
Backbone.history.start()
