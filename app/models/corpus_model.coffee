class Townomatic.CorpusModel extends Townomatic.BaseModel
  url: ->
    if @get('id') then "http://localhost:8082/corpora/#{@get('id')}" else "http://localhost:8082/corpora"


  toString: () ->
    @get 'name'
