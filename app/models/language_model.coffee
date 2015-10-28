class Townomatic.LanguageModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/languages/#{@get('_id')}" else "http://localhost:8082/languages"

  defaults:
    lookback: 2
    maxWordLength: 20


  toString: -> @get('name')


  translate: (wordsToTranslate) ->
    $.ajax
      url:"http://localhost:8082/translate/#{@get('_id')}"
      method: 'POST'
      data: body: wordsToTranslate
      dataType: 'json'
      success: (data) => @trigger 'translated', data
