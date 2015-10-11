class Townomatic.CommunityFormView extends Townomatic.FormView
  initialize: (options) ->
    $.getJSON 'icons.json', (data) =>
      @iconList = _.sortBy data.icons, (k,v) -> k
      @model.set 'iconList', @iconList
      super(options)

  postRender: ->
    console.log 'post render'
    @$('.selectpicker').selectpicker();
