class Townomatic.HeaderView extends Townomatic.BaseView
  templateName: 'header'

  initialize: (options) ->
    super(options)
    @template = JST["app/templates/#{@templateName}.html"]
    @logger.debug 'template', "app/templates/#{@templateName}.html", @template
    @nav =  [
      { label: "Languages", path: "#language" }
      { label: "Species", path: "#species" }
      { label: "Steadings", path: "#steading" }
      { label: "Beings", path: "#being" }
    ]

    @render()

  render: () ->
    $('#header').append(@template())
    _.each @nav, (nav) ->
      template = _.template "<li role='presentation'><a href='<%= path %>'><%= label %></a></li>"
      @$('.nav').append(template(nav))

  setBreadcrumbs: (breadcrumbs) ->
    $('.breadcrumb').html _.map breadcrumbs, (crumb) ->
      "<li><a href='##{crumb.url}'>#{crumb.label}</a></li>"
