class Townomatic.SpeciesModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/species/#{@get('_id')}" else "http://localhost:8082/species"
  toString: -> @get('name')

  initialize: (attrs, options) ->
    @set 'geneticSpace', @geneticSpace()

  geneticSpace: ->
    _.map [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], (i) ->
      chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
      _(i).times ->
        chars.push chars.shift()
      chars
