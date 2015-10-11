class Townomatic.CommunityFormView extends Townomatic.FormView
  initialize: (options) ->
    $.getJSON 'icons.json', (data) =>
      @iconList = _.sortBy data.icons, (k,v) -> k
      @model.set 'iconList', @iconList
      super(options)

  events: ->
    _.extend super(),
      'click ul.iconList li': 'eventClickIconList'

  eventClickIconList: (event)->
    @$('#iconTarget').val $(event.target).text()
    @$('ul.iconList li').removeClass 'yes'
    $(event.target).addClass('yes')
