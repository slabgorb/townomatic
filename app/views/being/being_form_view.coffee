class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @model = options.model
    promises = []
    promises.push @dropdownCollection('Species')
    promises.push @dropdownCollection('Language')
    promises.push @dropdownCollection('Occupation')
    $.when.apply($, promises).done =>
      super(options)
