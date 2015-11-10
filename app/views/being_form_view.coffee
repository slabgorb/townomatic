class Townomatic.BeingFormView extends Townomatic.FormView

  initialize: (options) ->
    @selections =
     species:    new Townomatic.SelectView({collection: new Townomatic.SpeciesCollection()})
     language:   new Townomatic.SelectView({collection: new Townomatic.LanguageCollection()})
     steading:  new Townomatic.SelectView({collection: new Townomatic.SteadingCollection()})
     occupation: new Townomatic.SelectView({collection: new Townomatic.OccupationCollection()})
    super
