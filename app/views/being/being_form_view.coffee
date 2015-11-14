class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @model = options.model
    @speciesCollection = new Townomatic.SpeciesCollection()
    @languageCollection = new Townomatic.LanguageCollection()
    @steadingCollection = new Townomatic.SteadingCollection()
    @occupationCollection = new Townomatic.OccupationCollection()
