window.Townomatic ?= {}

class Townomatic.BeingView extends Backbone.View

  initialize: (options) ->
    @template = JST["app/templates/being.html"]


  render: ->
    @$el.append @template(@model.toJSON())
    return @
