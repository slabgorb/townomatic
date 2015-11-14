class Townomatic.SelectView extends Backbone.View
  tagName:'select'
  className:'selectpicker'

  initialize: (options) ->
    @collection =  options.collection
    @logger = new Townomatic.logger()

  render: () ->
    dfd = $.Deferred()
    @collection.fetch().done =>
      _.each @collection.models, (model) =>
        model.set('selected', false)
        option = new Townomatic.OptionView( {model: model}).render().el
        @$el.append( option )
      dfd.resolve(@)
    dfd.promise()
