class Townomatic.SpeciesModel extends Townomatic.Model
  url: -> "http://loclahost:8082/species/#{@get('id')}"
