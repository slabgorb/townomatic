class Townomatic.ListView extends Townomatic.BaseView
  childClass: Townomatic.ListItemView
  templateName: ''
  formTemplateName: ''
  childContainer: '.children'
  collectionClass: Townomatic.BaseCollection
  modelClass: Townomatic.BaseModel
  formClass: Townomatic.FormView

  initialize: (options)->
    @type = options.type.toLowerCase()
    @templateName ?= "#{@type}_list"
    super(options)
    @collection = new @collectionClass
    @listenTo @collection, 'add', @addOne
    @listenTo @collection, 'remove', @removeOne
    @formTemplate  = JST["app/templates/#{@formTemplateName}.html"]

    @childViews = []
    @render()
    @collection.fetch()

  events: ->
    'click .add-new': 'onNew'
    'click .cancel': 'eventCancel'
    'click .submit': 'eventSubmit'

  eventCancel: (event) ->
    event.preventDefault()
    @refresh()

  refresh: ->
    @render()
    @collection.reset()
    @collection.fetch()

  onNew: ->
    Backbone.history.navigate("#{@type}/new", { trigger: true })

  onEdit: (model) ->
    Backbone.history.navigate("#{@type}/edit/#{model.get('_id')}", { trigger:true })

  onDuplicate: (model) ->
    duplicate = new @modelClass(model.toJSON())
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
