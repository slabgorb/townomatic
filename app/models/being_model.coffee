class Townomatic.BeingModel extends Townomatic.Model

  url: -> "http://localhost:8082/beings/#{@get('id')}"

  initialize: (attributes, options) ->


  defaults:
    genes: []
    species: 'human'
    name: {first: 'Some', last: 'Being'}
    occupation: "Unemployed"
    gender: "Neuter"
    age: 1
    spouses: []
    children: []
    parents: []

  #
  # Get the related genetic expressions for this species.
  #
  getGenetics: ->
    @genetics = new Townomatic.GeneticsModel({species: @get('species')})
    @listenTo @, 'geneticsFetched', @express
    @genetics.fetch().done =>
      @trigger 'fetchDone'


  #
  # Express the genetic code as a single integer.
  #
  value: ->
    _.reduce(@get 'genes', ((memo, gene) -> memo += parseInt(gene, 16)), 0)


  fetch:(options) ->
    super(options)
    debugger
    @getGenetics().done =>
      @set 'expression', @express()


  #
  # Match the expression against the genetic code of the being.
  #
  # The way this works is that the Genetic model has gene expressions,
  # like 'A0' or '622' which will match against the genes of the
  # being. The more often the string matches, the more important that
  # expression becomes.
  #
  express: (exps)->
    result = {}
    exps ?= @genetics.get('expression')
    _.each exps, (value, key) =>
      unless $.isArray(value)
        # if this is a category of sub-expressions, recurse.
        result[key] = @express value
      else
        _.each value, (expression) =>
          regexp = new RegExp(String(expression), 'g')
          console.log  regexp, @get('genes').join('').match(regexp)
          matches = @get('genes').join('').match(regexp)
          result[key] = if matches? then matches.length else 0
    result
