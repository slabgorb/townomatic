class Townomatic.BeingListItemView extends Townomatic.ListItemView

  initialize: (options) ->
    @template = JST["app/templates/being_list_item.html"]
    @el = 'body'
    @listenTo @model, 'complete', @render
    @model.fetch()

  render: ->
    console.log 'rendering', @el
    @$el.append @template(@model.toJSON())
    return @
