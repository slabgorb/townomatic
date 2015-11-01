class Townomatic.SpeciesListView extends Townomatic.ListView
  templateName: "species_list"
  formTemplateName: 'species_form'
  childClass: Townomatic.SpeciesListItemView
  collectionClass: Townomatic.SpeciesCollection
  modelClass: Townomatic.SpeciesModel

  initialize: (options = {}) ->
    super(options)

  events: ->
    _.extend super(),
      'mousedown #genotypeUI tr td': 'eventGenotypeMousedown'
      'click #expressionDisplay .expressionValue': 'eventClickExpressionValue'

  eventClickExpressionValue: (event) ->
    $target = $(event.target)
    $('span.expressionValue').removeClass('selected')
    $target.addClass('selected')
    @$('#genotypeUI td').removeClass('selected')
    _.each String($target.attr('data-value')).split(''), (char, i) ->
      @$("#genotypeUI .genotypeRow[data-index='#{i}'] .genotypeCell[data-value='#{char}']").addClass('selected')


  eventGenotypeMousedown: (event) ->
    $target = $(event.target)
    $target.siblings().removeClass('selected')
    $target.toggleClass 'selected'
    @trigger 'expressionChange',
