window.Townomatic ?= {}

class Townomatic.BeingView extends Backbone.View

  initialize: (options) ->
    @template = _.template($('#beings-template').html())


  render: ->
    console.log(@$el)
    @$el.append @template(@model.toJSON())
    return @
