class Townomatic.CommunityListView extends Townomatic.ListView
  templateName: "community_list"
  formTemplateName: "community_form"
  childClass: Townomatic.CommunityListItemView
  collectionClass: Townomatic.CommunityCollection
  modelClass: Townomatic.CommunityModel

  initialize: (options) ->
    $.getJSON 'icons.json', (data) =>
      @iconList = _.sortBy data.icons, (k,v) -> k
      super(options)

  addOne: (model) ->
    super(model)
    model.set 'iconList', @iconList

  events: ->
    _.extend super(),
      'click ul.iconList li': 'eventClickIconList'

  eventClickIconList: (event)->
    @$('#iconTarget').val $(event.target).text()
    @$('ul.iconList li').removeClass 'yes'
    $(event.target).addClass('yes')
