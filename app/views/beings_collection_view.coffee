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
    child = new Townomatic.BeingView({model: model})
    @childViews.push child
    @$el.append(child.render().el)

  addNew: () ->
    attributes = _. object(_.map(@$('#new-being input, #new-being select'), (input) -> [$(input).attr('data-field'),  $(input).val()]) )
    console.log attributes
    attributes =
      name:
        first: attributes['name.first']
        last: attributes['name.last']
      occupation: attributes.occupation
      genetics: attributes.genetics
      gender: attributes.gender
      age: attributes.age
    console.log attributes
    model = new Townomatic.BeingModel()
    model.set(attributes)

    console.log(model)

    @collection.add(model)

  render: (options) ->
    @$el.append @template()
    _.each @childViews, (child) =>
      child.$el = @$('#beings-children')
      @$el.append(child.render().el)
