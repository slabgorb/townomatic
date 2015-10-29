class Townomatic.LanguageView extends Townomatic.DetailView
  templateName: 'language'

  initialize: (options) ->
    super(options)
    @listenTo @model, 'translated', @showTranslation
    @listenTo @model, 'untranslated', @showUnTranslation

  events: ->
    _.extend super(),
      'keyup #translate-words': 'eventTranslate'
      'keyup #untranslate-words': 'eventUnTranslate'
      'click #glossary-button': 'eventGlossary'

  translate: ->
    wordsToTranslate = @$('#translate-words').val()
    @model.translate(wordsToTranslate)

  untranslate: ->
    wordsToTranslate = @$('#untranslate-words').val()
    @model.untranslate(wordsToTranslate)

  eventTranslate: _.debounce (-> @translate()),300

  eventUnTranslate: _.debounce (-> @untranslate()),300

  eventGlossary: ->
    @model.glossary()


  showTranslation: (translation) ->
    @$('#translation-results').text(translation)

  showUnTranslation: (translation) ->
    @$('#untranslation-results').text(translation)
