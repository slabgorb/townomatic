class Townomatic.HeaderView extends Townomatic.View
  templateName: 'header'

  initialize: (options) ->
    super(options)
    @template = JST["app/templates/#{@templateName}.html"]
    @logger.debug 'template', "app/templates/#{@templateName}.html", @template
    @nav =  [
      { label: "Corpora", path: "#corpora" }
      { label: "Species", path: "#species" }
      { label: "Communities", path: "#communities" }
      { label: "Beings", path: "#beings" }
    ]

    @render()

  render: () ->
    $('#header').append(@template())
    _.each @nav, (nav) ->
      template = _.template "<li role='presentation'><a href='<%= path %>'><%= label %></a></li>"
      @$('.nav').append(template(nav))
