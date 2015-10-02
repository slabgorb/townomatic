class Townomatic.DetailView extends Townomatic.BaseView
  initialize: (options) ->
    super(options)
    @model = options.model
    @model.fetch().done () =>
      @render()

  render: ->
    @logger.debug 'detail view', @model, @el
    @$el.html @template(@model.toJSON())
    return @
