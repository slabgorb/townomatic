class Townomatic.CommunityModel extends Townomatic.Model
  url: -> "http://localhost:8082/communities/#{@get('_id')}"
