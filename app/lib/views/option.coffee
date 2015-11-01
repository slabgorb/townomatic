class Townomatic.OptionView extends Townomatic.BaseView
  initialize: (options) ->
    @selected = options.selected
    @templateName = "option"
    @model = options.model
    super(options)


  render: ->
    @setElement @template(@model.toJSON())
    return @
