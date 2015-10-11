class Townomatic.ListView extends Townomatic.BaseView
  childClass: Townomatic.ListItemView
  templateName: ''
  formTemplateName: ''
  childContainer: '.children'
  collectionClass: Townomatic.BaseCollection
  modelClass: Townomatic.BaseModel
  formClass: Townomatic.FormView

  initialize: (options)->
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

  eventSubmit: (event) ->
    event.preventDefault()
    form = $(event.target).parent('form')
    serialization = $(form).serializeObject()
    @logger.debug 'form submission', serialization
    if serialization.id?
      model = @collection.findWhere({_id: serialization.id})
      model.set(serialization)
    else
      model = new @modelClass(serialization)
    model.save().done =>
      @refresh()

  onNew: ->
    @newModel = new @modelClass()
    @$el.html @formTemplate(@newModel.toJSON())

  onEdit: (model) ->
    @$el.html @formTemplate(model.toJSON())

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
