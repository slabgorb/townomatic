class Townomatic.View extends Backbone.View
  initialize: (options)->
    @logger = options.logger
    @logger.debug 'initializing', JST, @templateName
    @template = JST["app/templates/#{@templateName}.html"]


class Townomatic.ListItemView extends Townomatic.View
  tagName: 'li'
  initialize: (options) ->
    super(options)
    @model = options.model
    @el = options.el

  render: ->
    @logger.debug 'rendering list item', @model
    @$el.append @template(@model.toJSON())
    return @$el

class Townomatic.ListView extends Townomatic.View
  childClass: Townomatic.ListItemView
  templateName: ''
  childContainer: '.children'
  collectionClass: Townomatic.Collection

  initialize: (options)->
    super(options)
    @collection = new @collectionClass
    @listenTo @collection, 'add', @addOne
    @el = $('#main')
    @childViews = []
    @render()
    @collection.fetch()

  render: ->
    @logger.debug 'rendering', @$el, @template()
    @el.html @template()

  fetched: ->
    _.each @childView, (child) =>
      @logger.debug 'child', child, childContainer
      child.render()

  addOne: (model) ->
    child =  new @childClass( { model: model, logger: @logger, el: @childContainer } )
    @childViews.push child
    @logger.debug 'add one child', child, $(@childContainer)
    child.render()
