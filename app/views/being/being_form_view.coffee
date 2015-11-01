class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @species = new Townomatic.SpeciesCollection()
    @languages = new Townomatic.LanguageCollection()
    promises = []
    promises.push @species.fetch()
    promises.push @languages.fetch()
    $.when.apply($, promises).done () =>
      console.log 'done?'
      @model.set('species_list', _.map(@species.models, (s) -> {name: s.get('name'), id: s.id}))
      @model.set('language_list', _.map(@languages.models, (s) -> {name: s.get('name'), id: s.id}))
      super(options)
