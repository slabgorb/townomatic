class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @model = options.model
    @speciesCollection = new Townomatic.SpeciesCollection()
    @languageCollection = new Townomatic.LanguageCollection()
    @communityCollection = new Townomatic.CommunityCollection()
    @occupationCollection = new Townomatic.OccupationCollection()
