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
