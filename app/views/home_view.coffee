class Townomatic.HomeView extends Townomatic.View
  templateName: "home"

  initialize: (options) ->
    @el = $('#main')
    super(options)
    @render()
