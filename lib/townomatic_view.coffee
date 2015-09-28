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
    'click .duplicate': 'eventDuplicate'
    'click .edit': 'eventEdit'

  eventDuplicate: (_event) ->
    @trigger 'duplicate', @model

  eventEdit: (_event) ->
    @trigger 'edit', @model

  eventRemove: (_event) ->
    @model.destroy()


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
    @listenTo @collection, 'remove', @removeOne
    @formTemplate  = JST["app/templates/#{@formTemplateName}.html"]

    @childViews = []
    @render()
    @collection.fetch()

  events:
    'click .add-new': 'onNew'
    'click .btn-cancel': 'eventCancel'

  eventCancel: ->
    @render()
    @collection.reset()
    @collection.fetch()

  onNew: ->
    @newModel = new @modelClass()
    @$el.html @formTemplate(@newModel.toJSON())

  onEdit: (model) ->
    @$el.html @formTemplate(model.toJSON())

  onDuplicate: (model) ->
    duplicate = new @modelClass(model.toJSON())
    console.log duplicate
    duplicate.unset('_id')
    duplicate.save().done =>
      duplicate.fetch().done =>
        @collection.add(duplicate)

  addOne: (model) ->
    child =  new @childClass( { model: model, logger: @logger} )
    @childViews.push child
    @listenTo child, 'duplicate', @onDuplicate
    @listenTo child, 'edit', @onEdit
    $(@childContainer).append(child.render().el)

  removeOne: (model) ->
    removed = _.find @childViews, (child) -> child.model == model
    removed.remove()
