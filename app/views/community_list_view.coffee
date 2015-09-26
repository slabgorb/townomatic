class Townomatic.CommunityListView extends Townomatic.ListView
  templateName: "community_list"
  childClass: Townomatic.CommunityListItemView
  collectionClass: Townomatic.CommunityCollection

  events:
    'click .add-new': 'eventAddNew'
    'click h1': 'eventTest'

  eventAddNew: ->
    console.log('ereiamjh')

  eventTest: ->
    console.log('ehat')
