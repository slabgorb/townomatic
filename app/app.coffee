class Townomatic.App
  constructor: ->
    @logger = new Townomatic.logger()
    @header = new Townomatic.HeaderView({logger: @logger})
    @router = new Townomatic.Router({logger: @logger, header: @header})

  initialize: ->
    Backbone.history.start()

class Townomatic.Router extends Backbone.Router

  routes:
    "": "home"
    "being/:id": "being"
    "being": "beingList"
    "community": "communityList"
    "community/:id": "community"
    "language/:id": "language"
    "language": "languageList"
    "species": "speciesList"
    "species/:id": "species"

  initialize: (options) ->
    @logger = options.logger
    @logger.debug "starting router", @routes
    @header = options.header

  home: ->
    @logger.debug "route: home"
    @view = new Townomatic.HomeView({logger: @logger})
    @header.setBreadcrumbs []

  listPage: (type) ->
    @view = new Townomatic["#{type}ListView"]({logger: @logger})
    @header.setBreadcrumbs [
      { label:type, url: "/#{type}"}
    ]

  detailPage: (type, id) ->
    @model = new Townomatic["#{type}Model"]({_id: id, logger: @logger})
    @model.fetch
      success: =>
        @view = new Townomatic["#{type}View"]({model: @model, logger: @logger})
        @header.setBreadcrumbs [
          { label:type, url: "/#{type.toLowerCase()}"}
          { label:"#{@model.toString()}" , url:"/#{type.toLowerCase()}/#{id}"}
        ]

  being: (id) ->
    @detailPage 'Being', id

  beingList: () ->
    @listPage 'Being'

  community: (id) ->
    @detailPage 'Community', id

  communityList: () ->
    @listPage 'Community'

  language: (id) ->
    @detailPage 'Language', id

  languageList: ->
    @listPage 'Language'

  species: (id) ->
    @detailPage 'Species', id

  speciesList: ->
    @listPage 'Species'



$ ->
  app = new Townomatic.App()
  app.initialize()
