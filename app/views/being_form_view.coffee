class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @selections =
     species:    new Townomatic.SelectView({collection: new Townomatic.SpeciesCollection()})
     language:   new Townomatic.SelectView({collection: new Townomatic.LanguageCollection()})
     community:  new Townomatic.SelectView({collection: new Townomatic.CommunityCollection()})
     occupation: new Townomatic.SelectView({collection: new Townomatic.OccupationCollection()})
    super
