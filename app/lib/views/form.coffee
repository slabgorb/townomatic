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

  dropdownCollection: (className) ->
    dfd = $.Deferred()
    collection = new Townomatic["#{className}Collection"]()
    collection.fetch().done ->
      @model.set("#{className.toLowerCase()}_list", collection.models)
      dfd.resolve(collection)
    dfd.promise()


  eventCancel: (event) ->
    Backbone.history.navigate("#{@type}", { trigger: true })
