class Townomatic.BaseView extends Backbone.View
  initialize: (options = {})->
    options.type ?= 'Base'
    @type = options.type.toLowerCase()
    @modelClass ?= Townomatic["#{options.type}Model"]
    @collectionClass ?= Townomatic["#{options.type}Collection"]
    options.logger ?= new Townomatic.logger()
    @logger = options.logger
    @template = JST["app/templates/#{@templateName}.html"]
    _.bindAll @, 'preRender', 'render', 'postRender'
    @render = _.wrap @render, (render) =>
      @preRender()
      render()
      @postRender()

  events: -> {}

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
