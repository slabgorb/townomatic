class Townomatic.LanguageModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/languages/#{@get('_id')}" else "http://localhost:8082/languages"

  initialize: (options) ->
    super
    @urls =
      glossary: => "http://localhost:8082/glossary/#{@get('_id')}"
      translate: =>
      untranslate: => "http://localhost:8082/untranslate/#{@get('_id')}"


  defaults:
    lookback: 2
    maxWordLength: 20


  toString: -> @get('name')

  glossary: ->
    $.ajax
      url: @urls.glossary()
      dataType: 'json'
      success: (data) =>
        data = _.map data, (d) ->
          [d.translation, d.word]
        @toCSV(data, @get('name'))


  clearGlossary: ->

  untranslate: (wordsToTranslate) ->
    $.ajax
      url: @urls.untranslate()
      method: 'POST'
      data: body: wordsToTranslate
      dataType: 'json'
      success: (data) => @trigger 'untranslated', data


  translate: (wordsToTranslate) ->
    $.ajax
      url: @urls.translate()
      method: 'POST'
      data: body: wordsToTranslate
      dataType: 'json'
      success: (data) => @trigger 'translated', data
