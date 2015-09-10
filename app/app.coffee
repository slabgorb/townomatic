class App

  initialize: ->
    @beings = new Townomatic.BeingsCollection()
    @beingsView = new Townomatic.BeingsCollectionView({collection: @beings})
    @beings.fetch()

$ ->
  app = new App
  app.initialize()
