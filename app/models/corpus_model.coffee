class Townomatic.CorpusModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/corpora/#{@get('_id')}" else "http://localhost:8082/corpora"


  toString: () ->
    @get 'name'
