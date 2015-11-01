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
      'click #translation-results': 'eventClickTranslated'
      'click #untranslation-results': 'eventClickTranslated'

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

  eventClickTranslated: (event) ->
    $target = $(event.target)
    @logger.debug 'clicked', $target, $target.val(), $target.contents()
    $target.selectRange(0, $target.val().length)

  showTranslation: (translation) ->
    @$('#translation-results').val(translation)

  showUnTranslation: (translation) ->
    @$('#untranslation-results').val(translation)
