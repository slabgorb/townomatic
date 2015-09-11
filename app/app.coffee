class App

  initialize: ->
    @beings = new Townomatic.BeingsCollection()
    @beingsView = new Townomatic.BeingsCollectionView({collection: @beings})
    @beings.fetch()

$ ->
  console.log 'starting application'
  app = new App
  app.initialize()
