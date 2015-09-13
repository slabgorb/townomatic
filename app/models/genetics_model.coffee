class Townomatic.GeneticsModel extends Townomatic.Model
  url: ->
    if @get('species')?
      "http://localhost:8082/genetics/#{@get('species')}"
    else
      "http://localhost:8082/genetics/#{@get('species')}"
