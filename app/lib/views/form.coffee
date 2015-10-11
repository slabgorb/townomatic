class Townomatic.FormView extends Townomatic.BaseView
  formName: ''


  initialize: (options) ->
    @type = options.type.toLowerCase()
    @templateName ?= "#{@type}_form"
    super(options)
    @model = options.model
    @render()

  events: ->
    'click .cancel': 'eventCancel'
    'click .submit': 'eventSubmit'

  eventSubmit: (event) ->
    event.preventDefault()
    form = $(event.target).parent('form')
    serialization = $(form).serializeObject()
    @logger.debug 'form submission', serialization
    if serialization.id?
      @model.set(serialization)
    else
      model = new @modelClass(serialization)
    model.save().done =>
      @refresh()

  eventCancel: (event) ->
    Backbone.history.navigate("#{@type}", { trigger: true })
