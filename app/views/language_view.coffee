class Townomatic.LanguageView extends Townomatic.DetailView
  templateName: 'language'

  initialize: (options) ->
    super(options)
    @listenTo @model, 'translated', @showTranslation

  events: ->
    _.extend super(),
      'keyup #translate-words': 'eventTranslate'
      'click #glossary-button': 'eventGlossary'

  translate: ->
    console.log 'translating'
    wordsToTranslate = @$('#translate-words').val()
    @model.translate(wordsToTranslate)

  eventTranslate: _.debounce (-> @translate()),300

  eventGlossary: ->
    @model.glossary()


  showTranslation: (translation) ->
    @$('#translation-results').text(translation)
