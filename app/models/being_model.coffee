class Townomatic.BeingModel extends Townomatic.BaseModel

  url: ->
    if @get('_id') then "http://localhost:8082/beings/#{@get('_id')}" else "http://localhost:8082/beings"

  initialize: (attributes, options) ->


  defaults:
    genes: []
    species:''
    occupation: ''
    gender: ''
    language: ''
    age: 1
    spouses: []
    children: []
    parents: []
    expression: {}

  toString: () ->
    [@get('name.first'), @get('name.last')].join(' ')

  #
  # Get the related genetic expressions for this species.
  #
  getGenetics: ->
    @genetics = new Townomatic.SpeciesModel({id: @get('species')})
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
    @getGenetics().done =>
      @set 'expression', @express()
      @trigger 'complete'

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
          matches = @get('genes').join('').match(regexp)
          result[key] = if matches? then matches.length else 0
    result

  describe: ->
    _.each @get('expression'), (value, trait) =>
      @logger.debug 'describe', value, trait

  # def description(ex = nil)
  #   sorted_map = { }
  #   begin
  #     self.genetic_map(ex).each_pair do |trait, value|
  #       sorted_map[trait] = value.to_a.sort{ |a,b| b.last <=> a.last }
  #     end
  #     return sorted_map.to_a.collect { |c| { c.first => [c.second.first.first.to_sym, c.second.first.second] }}
  #   rescue
  #     []
  #   end
  # end
