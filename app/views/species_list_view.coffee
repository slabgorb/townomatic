class Townomatic.SpeciesListView extends Townomatic.ListView
  templateName: "species_list"
  formTemplateName: 'species_form'
  childClass: Townomatic.SpeciesListItemView
  collectionClass: Townomatic.SpeciesCollection
  modelClass: Townomatic.SpeciesModel

  initialize: (options = {}) ->
    super(options)
    @isMouseDown = false

  events: ->
    _.extend super(),
      'mousedown #genotypeUI tr td': 'eventGenotypeMousedown'
      'mouseover #genotypeUI tr td': 'eventGenotypeMouseover'
      'mouseup form': 'eventMouseup'

  eventMouseup: (event) ->
    @isMouseDown = false

  eventGenotypeMousedown: (event) ->
    $target = $(event.target)
    $target.toggleClass 'selected'
    @isMouseDown = true
    return false

  eventGenotypeMouseover: (event) ->
    console.log @isMouseDown
    $target = $(event.target)
    if @isMouseDown
      $target.toggleClass 'selected', not $target.hasClass('selected')
