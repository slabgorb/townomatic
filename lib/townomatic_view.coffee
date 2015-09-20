class Townomatic.View extends Backbone.View
  initialize: (options)->
    @logger = options.logger
    @logger.debug 'initializing', JST, @templateName
    @template = JST["app/templates/#{@templateName}.html"]


class Townomatic.ListItemView extends Townomatic.View
  initialize: (options) ->
    @model = options.model
    @logger = options.logger
    @logger.debug 'list item view', options, @templateName

  render: ->
    @logger.debug 'child model', @model
    @$el.html @template(@model.toJSON())
    return @

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
      @$(@childContainer).append(child.render().el())

  addOne: (model) ->
    child =  new @childClass( { model: model, logger: @logger } )
    @childViews.push child
    @logger.debug 'add one child', child

    @$(@childContainer).append(child.render().el())
