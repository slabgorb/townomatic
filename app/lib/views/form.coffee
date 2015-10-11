class Townomatic.FormView extends Townomatic.BaseView
  formName: ''

  events: ->
    'click .cancel': 'eventCancel'
    'click .submit': 'eventSubmit'

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

  eventCancel: (event) ->
    event.preventDefault()
    @refresh()
