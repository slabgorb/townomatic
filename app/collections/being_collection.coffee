class Townomatic.BeingsCollection extends Backbone.Collection
  url: -> "http://localhost:8082/beings"
  model: Townomatic.BeingModel
