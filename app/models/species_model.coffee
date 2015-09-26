class Townomatic.SpeciesModel extends Townomatic.Model
  url: -> "http://localhost:8082/species/#{@get('id')}"
