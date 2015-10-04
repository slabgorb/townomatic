class Townomatic.CommunityModel extends Townomatic.BaseModel
  url: ->
    if @get('_id') then "http://localhost:8082/communities/#{@get('_id')}" else "http://localhost:8082/communities"
  defaults:
    description: ''
    name: ''
    colors:
      main: '#FFFFFF'
      secondary: '#000000'
    icon: 'acorn'


  toString: -> @get('name')
