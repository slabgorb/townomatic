class Townomatic.LanguageView extends Townomatic.DetailView
  templateName: 'language'

  initialize: (options) ->
    super(options)
    @listenTo @model, 'translated', @showTranslation

  events: ->
    _.extend super(),
      'click #translate-button': 'eventTranslate'

  eventTranslate: () ->
    wordsToTranslate = @$('#translate-words').val()
    @model.translate(wordsToTranslate)

  showTranslation: (translation) ->
    @$('#translation-results').text(translation)
