class Townomatic.View extends Backbone.View
  initialize: (options)->
    @logger = options.logger
    @template = JST["app/templates/#{@templateName}.html"]
    _.bindAll @, 'preRender', 'render', 'postRender'
    @render = _.wrap @render, (render) =>
      @preRender()
      render()
      @postRender()

  render: ->
    if @model?
      @$el.html @template(@model.toJSON())
    else
      @$el.html @template()
    return @

  preRender: ->
    return @

  postRender: ->
    $('[data-toggle="tooltip"]').tooltip()
    return @

class Townomatic.DetailView extends Townomatic.View
  initialize: (options) ->
    super(options)
    @model = options.model
    @model.fetch().done () =>
      @render()

  render: ->
    @logger.debug 'detail view', @model, @el
    @$el.html @template(@model.toJSON())
    return @


class Townomatic.ListItemView extends Townomatic.View
  tagName: 'tr'
  className: 'item'
  id: -> @model.get('_id')

  initialize: (options) ->
    super(options)
    @model = options.model

  render: ->
    @$el.html @template(@model.toJSON())
    return @

  events: ->
    'click .remove': 'eventRemove'

  eventRemove: (event) ->
    @model.destroy
      success: () => @remove()


class Townomatic.FormView extends Townomatic.View
  formName: ''


class Townomatic.ListView extends Townomatic.View
  childClass: Townomatic.ListItemView
  templateName: ''
  formTemplateName: ''
  childContainer: '.children'
  collectionClass: Townomatic.Collection
  modelClass: Townomatic.Model

  initialize: (options)->
    super(options)
    @collection = new @collectionClass
    @listenTo @collection, 'add', @addOne
    @formTemplate  = JST["app/templates/#{@formTemplateName}.html"]

    @childViews = []
    @render()
    @collection.fetch()

  events:
    'click .add-new': 'eventNew'

  eventNew: ->
    @logger.debug 'adding new'
    @newModel = new @modelClass()
    @$el.append @formTemplate(@newModel.toJSON())

  addOne: (model) ->
    child =  new @childClass( { model: model, logger: @logger} )
    @childViews.push child
    $(@childContainer).append(child.render().el)
