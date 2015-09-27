class Townomatic.LanguageModel extends Townomatic.Model
  url: -> "http://localhost:8082/languages/#{@get('id')}"

  defaults:
    lookback: 2

  toString: -> @get('name')


  linksAndNodes: ->
    nodes = {}
    links = []
    keys = []
    _.each @get('histogram'), (value, key) ->
      key = key.split(',').join('')
      nodes[key] = {name: key}
      if keys.length
        links.push {source: nodes[key], target: nodes[_.last keys]}
      keys.push key

    # _.each keys, (key) ->
    #   links.push {source: key,

    # _.each @get('histogram'), (value, key) ->
    #   key = key.split(',').join('')
    #   nodes[key] = {name: key, count: 0 }
    #   #links.push {source: nodes['root'], target: nodes[key]}
    #   _.each value, (count, char) ->
    #     nodes[char] = {name: char, count: count}
    #     links.push {source: nodes[key], target: nodes[char]}
    [nodes, links]
