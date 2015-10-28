class Townomatic.LanguageModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/languages/#{@get('_id')}" else "http://localhost:8082/languages"

  defaults:
    lookback: 2
    maxWordLength: 20


  toString: -> @get('name')

  glossary: ->
    $.ajax
      url:"http://localhost:8082/glossary/#{@get('_id')}"
      dataType: 'json'
      success: (data) =>
        data = _.map data, (d) ->
          [d.translation, d.word]
        @toCSV(data, @get('name'))


  clearGlossary: ->


  translate: (wordsToTranslate) ->
    $.ajax
      url:"http://localhost:8082/translate/#{@get('_id')}"
      method: 'POST'
      data: body: wordsToTranslate
      dataType: 'json'
      success: (data) => @trigger 'translated', data
