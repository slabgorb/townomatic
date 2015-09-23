class Townomatic.CorpusListItemView extends Townomatic.ListItemView
  templateName: 'corpus_list_item'

  render: () ->
    super()
    @draw @model.get('_id')
    @el


  draw: (id) ->
    diameter = 500
    tree = d3.layout.tree()
      .size [400, diameter / 2 - 120]
      .separation (a, b) ->
        (if a.parent == b.parent then 1 else 2) / a.depth

    diagonal = d3.svg.diagonal.radial().projection((d) ->
      [
        d.y
        d.x / 180 * Math.PI
      ]
    )
    svg = d3.select("#histogram-#{id}")
      .append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .append('g')
      .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')')

    histogram = @model.get 'histogram'

    data = {name: '', children: []}

    console.log histogram
    data.children = _.map histogram, (v,k) ->
      name: k.split(',').join('')
      children: _.map v, (v1, k1) ->
        name: k1.split(',').join('')
        size: v1



    nodes = tree.nodes(data)
    links = tree.links(nodes)
    link = svg.selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', diagonal)
      .on 'mouseover', ->
        d3.select(@).attr('class', 'link over')
      .on 'mouseout', ->
        d3.select(@).attr('class', 'link out')

    node = svg.selectAll('.node')
      .data nodes
      .enter()
      .append 'g'
      .attr 'class', 'node'
      .attr 'transform', (d) ->
        'rotate(' +( d.x - 90 )+ ')translate(' + d.y + ')'

    node.append('text')
      .attr 'text-anchor', (d) ->
        if d.x < 180 then 'start' else 'end'
      .attr 'transform', (d) ->
        if d.x < 180 then 'translate(8)' else 'rotate(180)translate(-8)'
      .text (d) ->
        if d.size
         "#{d.name} - #{d.size}"
        else
          d.name

    d3.select(self.frameElement).style 'height', diameter - 150 + 'px'
