class Townomatic.BaseCollection extends Backbone.Collection
  initialize: (attributes, options) ->
    @apiBase = 'http://localhost:8082'
