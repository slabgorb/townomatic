class Townomatic.CorpusListItemView extends Townomatic.ListItemView
  templateName: 'corpus_list_item'

  render: () ->
    super()
    @draw @model.get('_id')
    @el


  draw: (id) ->
    width = 500
    height = 300
    padding = 20
    svg = d3.select("#histogram-#{id}")
      .append('svg')
      .attr('width', width + padding * 2)
      .attr('height', height + padding * 2)

    histogram = @model.get 'histogram'

    # show initial keys in bottom
    keys = (_.keys histogram).sort()

    x = d3.scale.ordinal()
      .domain keys
      .rangePoints [0, width]

    maxLength = _.max(_.map histogram, (v,k) -> (_.values v).length )
    maxCount =  _.max(_.map histogram, (v,k) -> _.max(v))

    y = d3.scale.linear()
      .domain [0, maxLength ]
      .range [height - 20, 20 ]

    r = d3.scale.linear()
      .domain [0, maxCount]
      .range [3, 100 ]

    g = svg.append('g')
      .attr 'transform', "translate(#{padding}, #{height})"
      .attr 'width', width

    treeG =  svg.append('g')
      .attr 'transform', "translate(#{padding}, #{padding})"
      .attr 'width', width
      .attr 'height', height / 2 - 10

    keyToSelector = (key) ->
      key.split(',').join('').replace(/\^/g,'-')

    treeData = (key) ->
      _.sortBy (_.map histogram[key], (v,k) -> {char: k, count: v}), (s) -> s.count

    treeCircles = (key) ->
      nodes = treeG.selectAll(".treenode-circle-#{keyToSelector(key)}")
        .data treeData(key)

      n = nodes.enter()
        .append 'g'
        .attr 'class', "treenode-circle-#{keyToSelector(key)}"
        .attr 'transform', (d,i) ->  "translate(#{x(key) + 20},#{y(i)})"


      n.append('circle')
        .attr 'r', (d) -> r(d.count)
        .attr 'fill', '#ECE5CE'
        .attr 'stroke', '#ECE5CE'
        .attr 'stroke-opacity', 0.2
        .attr 'fill-opacity', 0


    treeText = (key) ->

      nodes = treeG.selectAll(".treenode-text-#{keyToSelector(key)}")
        .data treeData(key)

      n = nodes.enter()
        .append 'g'
        .attr 'class', "treenode-text-#{keyToSelector(key)}"
        .attr 'transform', (d,i) ->  "translate(#{x(key) + 20},#{y(i)})"

      n.append('text')
        .text  (d,i) ->  if i % 2 == 1 then "#{d.char} - #{d.count}" else "#{d.count} - #{d.char}"
        .style 'font-size', '14px'
        .style 'color', 'green'
        .attr 'fill-opacity', 0
        .style 'text-anchor', (d,i) -> if i % 2 == 0 then 'end' else 'start'
        .attr 'dx', (d,i) -> if i % 2 == 0 then -r(d.count) else r(d.count)


    showKey = (key) ->
      d3.select(".key-#{keyToSelector(key)}")
        .style('font-size', '18px')
        .attr('dx', '1ex')
      d3.selectAll(".treenode-text-#{keyToSelector(key)} text").attr('fill-opacity', 1)
      d3.selectAll(".treenode-circle-#{keyToSelector(key)} circle").attr('fill-opacity', 1)


    hideKey = (key) ->
      d3.select(".key-#{keyToSelector(key)}").style('font-size', '5px')
        .attr('dx', '0')
      d3.selectAll(".treenode-text-#{keyToSelector(key)} text").attr('fill-opacity', 0)
      d3.selectAll(".treenode-circle-#{keyToSelector(key)} circle").attr('fill-opacity', 0)


    _.each keys, (key) ->
      treeCircles(key)
      treeText(key)

    g.selectAll 'text.key'
      .data keys
      .enter()
      .append 'text'
      .attr 'class', (d) -> "key key-#{keyToSelector(d)}"
      .attr 'x', (d) -> x(d)
      .text (d) -> d.split(',').join('')
      .attr 'transform', (d) -> "rotate(90 #{x(d)},10)"
      .on 'mouseover', (d) -> showKey(d)
      .on 'mouseout', (d) -> hideKey(d)
