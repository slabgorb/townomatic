window.Townomatic ?= {}

class Townomatic.BeingsCollectionView extends Backbone.View

  el: '#beings'

  initialize: (options) ->
    @template = JST["app/templates/beings_collection.html"]
    @collection = options.collection
    @listenTo @collection, 'add', @addOne
    @childViews = []
    @collection.fetch().done =>
      @render()

  events:
    "click .add-being": 'addNew'

  addOne: (model) ->
    @childViews.push new Townomatic.BeingView({model: model})

  addNew: () ->
    console.log('adding')
    attributes = _.map @$('#new-being input'), (input) ->
      input.attr('data_field', input.value())
    model = new Townomatic.BeingModel attributes
    @collection.add(model)

  render: (options) ->
    @$el.append @template()
    _.each @childViews, (child) =>
      child.$el = @$('#beings-children')
      @$el.append(child.render().el)
