class Townomatic.App extends Backbone.Router
  routes:
    "/beings/:species": "beings"
    "/being/:id": "being"


  beings: (species) ->
    @collecton = new Townomatic.BeingsCollection({species: species})
    @view = new Townomatic.BeingsCollectionView({collection: @collection})

app = new Townomatic.App
Backbone.history.start()
