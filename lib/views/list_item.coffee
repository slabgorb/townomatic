class Townomatic.ListItemView extends Townomatic.BaseView
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
