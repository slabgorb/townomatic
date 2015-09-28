class Townomatic.SpeciesModel extends Townomatic.Model
  url: ->
    if @get('_id') then "http://localhost:8082/species/#{@get('_id')}" else "http://localhost:8082/species"
  toString: -> @get('name')
