class Townomatic.View extends Backbone.View
  initialize: (options)->
    console.log 'initializing', JST
    @template = JST["app/templates/#{@templateName}.html"]



class Townomatic.ListItemView extends Townomatic.View


class Townomatic.ListView extends Townomatic.View
  childClass: Townomatic.ListItemView
  templateName: ''
  childContainer: '.children'
  collectionClass: Townomatic.Collection

  initialize: (options)->
    super(options)
    @collection = new @collectionClass
    @listenTo @collection, 'add', @addOne
    @el = '#main'
    @childViews = []
    @render()
    @collection.fetch()

  render: ->
    console.log 'rendering'
    @$el.append @template()

  fetched: ->
    _.each @childView, (child) =>
      @$childContainer.append(child.render().el())

  addOne: (model) ->
    child =  new @childClass( { model: @model } )
    @childViews.push child
    @$childContainer.append(child.render().el())
