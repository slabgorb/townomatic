class BeingCollection extends Backbone.Collection
  url: -> "http://localhost:8082/beings"
  model: BeingModel
