class Townomatic.CommunityModel extends Townomatic.Model
  url: ->
    if @get('_id') then "http://localhost:8082/communities/#{@get('_id')}" else "http://localhost:8082/communities"
  defaults:
    description: ''
    name: ''
    colors:
      main: '#FFFFFF'
      secondary: '#FFFFFF'
    icon: 'bee-volant'


  toString: -> @get('name')
