class Townomatic.FormView extends Townomatic.BaseView
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
    @model.set(serialization)
    @model.save().done =>
      Backbone.history.navigate("#{@type}", { trigger: true })

  eventCancel: (event) ->
    Backbone.history.navigate("#{@type}", { trigger: true })
