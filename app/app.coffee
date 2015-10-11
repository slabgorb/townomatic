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
    "being/new": "beingForm"
    "being/edit/:id": "beingForm"
    "community": "communityList"
    "community/:id": "community"
    "community/new": "communityForm"
    "community/edit/:id": "communityForm"
    "corpus": "corpusList"
    "corpus/:id": "corpus"
    "language/:id": "language"
    "language": "languageList"
    "language/new": "languageForm"
    "language/edit/:id": "languageForm"
    "species": "speciesList"
    "species/:id": "species"
    "species/new": "speciesForm"
    "species/edit/:id" : "speciesForm"

  initialize: (options) ->
    @logger = options.logger
    @logger.debug "starting router", @routes
    @header = options.header
    @main = '#main'

  home: ->
    @view = new Townomatic.HomeView({logger: @logger, el: '#main', type: 'Home'})
    @header.setBreadcrumbs []

  listPage: (type) ->
    @view = new Townomatic["#{type}ListView"]({logger: @logger, el: '#main', type: type})
    @header.setBreadcrumbs [
      { label:type, url: "/#{type}"}
    ]

  formPage: (type, id) ->
    if id?
      @model = new Townomatic["#{type}Model"]({_id: id, logger: @logger})
      @model.fetch
        success: =>
          @view = new Townomatic["#{type}FormView"]({model: @model, logger: @logger, el: '#main', type: type})
    else
      @model = new Townomatic["#{type}Model"](logger: @logger)
      @view = new Townomatic["#{type}FormView"]({model: @model, logger: @logger, el: '#main', type: type})

  detailPage: (type, id) ->
    @model = new Townomatic["#{type}Model"]({_id: id, logger: @logger, type: type})
    @model.fetch
      success: =>
        @view = new Townomatic["#{type}View"]({model: @model, logger: @logger, el:'#main', type: type})
        @header.setBreadcrumbs [
          { label:type, url: "/#{type.toLowerCase()}"}
          { label:"#{@model.toString()}" , url:"/#{type.toLowerCase()}/#{id}"}
        ]

  being: (id) ->
    @detailPage 'Being', id

  beingList: () ->
    @listPage 'Being'

  beingForm: (id) ->
    @formPage 'Being', id


  community: (id) ->
    @detailPage 'Community', id

  communityList: () ->
    @listPage 'Community'

  communityForm: (id) ->
    @formPage 'Community', id

  corpus: () ->
    @detailPage 'Corpus'

  corpusList: () ->
    @listPage 'Corpus'

  language: (id) ->
    @detailPage 'Language', id

  languageList: ->
    @listPage 'Language'

  languageForm: (id)->
    @formPage 'Language', id

  species: (id) ->
    @detailPage 'Species', id

  speciesList: ->
    @listPage 'Species'

  speciesForm: (id) ->
    @formPage 'Species', id

$ ->
  $.extend FormSerializer.patterns,
    validate: /^[a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*(?:\[\])?$/i
  window.app = new Townomatic.App()
  app.initialize()
