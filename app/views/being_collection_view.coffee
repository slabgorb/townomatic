window.Townomatic ?= {}

class Townomatic.BeingsCollectionView extends Backbone.View

  initialize: (options) ->
    @collection = options.collection
    @childViews = []

  addOne: (model) ->
    @childViews.push new Townomatic.BeingView({model: @model})

  addNew: (model) ->
    @collection.add(model)

  render: (options) ->
