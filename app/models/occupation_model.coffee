class Townomatic.OccupationModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/occupation/#{@get('_id')}" else "http://localhost:8082/occupations"
