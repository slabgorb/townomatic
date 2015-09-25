utils = require '../utils'
_ = require 'underscore'
mongoose = require('mongoose')


describe "models/being", ->
  ex =
    "skin color":
      blue: [60, 61, 62]
      green: [63, 64, 65]
      yellow: [65, 66, 67]
    "eye color":
      blue: [50, 51, 52]
      green: [53, 54, 55]
      yellow: [55, 56, 57]

  species = new mongoose.models.Species
    name: 'meseeks'
    expression: ex
  species.save()


  adam = new mongoose.models.Being
    name: {first: 'Adam', last: 'Ant'}
    species: species
    gender: "Male"
    occupation: "Biologist"
    age: 50
  adam.setValue('genes', ["F450EB", "516F31", "5AFE21", "BB9D50",   "D3B19E", "67AAF8", "98068E", "FAFAB6", "D6BBDF", "301A9A",   "EC4F4F", "7F3CA0", "71F48F", "783C46", "4C0396", "28B426",   "97F76B", "36C10D", "36B59A", "585EC1", "FF52B6", "9A42FE",   "5157BB", "B14E70", "69418D", "7C77F4", "2B61F3", "F1B844",   "0746BA", "12C054", "1A5D38", "593D5F", "CCA96A", "88E318",   "4E7CB2", "F567D1", "B7D310", "45FA74", "651338", "646456",   "29E923", "3A2EE4", "BCB360", "698980", "CAB0E1", "AD599F",   "4F3841", "6F6131", "3F1E1D", "028A2E", "C470E9", "6A645C",   "3C0DD5", "3004CF", "9EB4BF", "0B9CA5", "A2CB8E", "8C1B3C",   "BF4FA9", "14E9F1", "AA7247", "5BAA85", "013D4C", "9726B9",   "20B50D", "6F5142", "47E39A", "E69507", "B72B3C", "CD7B40",   "371071", "F9B249", "382E57", "7B6107", "868981", "D7AAE9",   "3D4DAD", "83D406", "69858F", "6985BD", "12C01D", "6F90F3",   "8036CB", "451C2D", "5A1666", "249A2A", "47C740", "B20201",   "D2B2BF", "95A784", "D5D743", "08182F", "F6AA56", "EBEF0D",   "3AA6A2", "06AF8F", "8C1258", "0EF5C7", "70969F", "C66F9B",   "8FBDCB", "42D9EE", "73D684", "78C63C", "CFA067", "339D2C",   "24A05B", "4E4815", "B87A63", "B5EF40", "8140AA", "1C7A46",   "6E244D", "B9A3CF", "AAA679", "5966FF", "003440", "4B3604",   "C39891", "3F253A", "442A89", "042AF8", "037D12", "7B9602",   "9276A8", "66D837", "D578CF", "CD0B82"])
  adam.save()

  eve = new mongoose.models.Being
    name: {first: 'Eve', last: 'Bug'}
    species: species
    gender: "Female"
    occupation: "Homemaker"
    age: 50
  eve.setValue('genes', ["375AEE", "D51034", "256A6C", "C2F3EC", "C2CB0D", "55FC30", "117084", "417454", "D38287", "DC8F4D", "EAEE37", "53DA47", "D94E5E", "73F679", "700664", "F2F90D", "7242A2", "578BE7", "B47688", "BAEC58", "3E66E6", "45B0BF", "E7C0C6", "F54BF6", "C95AEF", "6D51A5", "52F5B7", "B7DCF4", "29A44D", "B20F64", "E52B73", "570819", "EB46C0", "508748", "B22FA9", "41AE8D", "5429F8", "710C5D", "4F3FD9", "7BADBD", "D496CC", "1910E8", "4D792E", "B370F9", "E96CAF", "7FF124", "C103B8", "6BFEA0", "8DF404", "5D4401", "E566DF", "C9A4B6", "3DA753", "616B78", "5CB510", "AE3597", "98F883", "1CF070", "2E3852", "707D15", "9E8CD6", "B7794F", "924002", "D56187", "0966FE", "70A18E", "BB31D3", "8C8C2C", "487D25", "12A413", "CA533B", "399F71", "34FE56", "E5EEC4", "38AE9B", "DAF030", "0C5688", "E1A035", "60D213", "254A16", "3B5BD0", "9CA128", "158C3D", "69507F", "FC8C97", "E3B49C", "4C6A9D", "C5A634", "585CC2", "7B9784", "DD3BE1", "4B438A", "C0498E", "DFA8CC", "1C1818", "300495", "6516BA", "8CC1A3", "AAEEA1", "3A0722", "CE9E6E", "EEA1CA", "79B396", "D6F355", "EC64EA", "7C5E9D", "07DFA9", "5D3BAC", "7D35FB", "FD3E2D", "AAEE35", "975829", "EF9817", "FA0DFD", "CCE55B", "761963", "52A834", "E28F0B", "537C44", "0EA926", "4D1BA5", "17287C", "C5D185", "74758C", "FE51A2", "1174D5", "DA9E9C", "EBB8E5" ])
  eve.save()
  abel = mongoose.models.Being.reproduce(adam, eve, 'Abel', 'Male')
  abel.save()
  cain = mongoose.models.Being.reproduce(adam, eve, 'Cain', 'Male')
  cain.save()
  jezebel = mongoose.models.Being.reproduce(adam, eve, 'Jezebel', 'Female')
  jezebel.save()



  it "makes a being",  ->
    adam.name.first.should.equal 'Adam'
    adam.name.last.should.equal 'Ant'
    adam.living.should.equal true

  it "has default genetics", ->
    adam.genes.length.should.equal 128

  it "should have 6-digit hex numbers for all genes", ->
    (_.filter adam.genes, (gene) -> gene.length == 6).length.should.equal 128
    numbers = _.map adam.genes, (gene) -> parseInt(gene, 16)
    _.max(numbers).should.be.below(16777216)
    _.min(numbers).should.be.above(-1)

  it "marries and divorces one being to another", ->
    adam.marry(eve)
    adam.spouses.length.should.equal 1
    adam.divorce(eve)
    adam.spouses.length.should.equal 0

  it "recognizes death", ->
    adam.die()
    adam.living.should.equal false


  it "expresses genetics",  ->
    adam.express().should.eql
      'skin color':
        blue: 3
        green: 1
        yellow: 4
      'eye color':
        blue: 1
        green: 0
        yellow: 3

  it "reproduces", ->
    abel.name.last.should.eql 'Ant'
    allGenes = _.flatten([abel.genes, eve.genes, adam.genes])
    allGenes.length.should.equal adam.genes.length * 3
    (_.intersection(adam.genes, abel.genes).length + _.intersection(eve.genes, abel.genes).length).should.equal adam.genes.length
    _.map(abel.parents, (parent) -> parent.toString()).should.eql [adam.id, eve.id]
    _.map(adam.children, (child) -> child.toString()).should.eql [abel.id, cain.id, jezebel.id]
    _.map(eve.children, (child) -> child.toString()).should.eql [abel.id, cain.id, jezebel.id]

  it "knows about siblings", ->
    console.log abel.parents
    mongoose.models.Being.find {}, (err, beings) ->
      console.log beings


    # mongoose.models.Being.findOne({'name.first':'Abel'})
    #   .populate('parents')
    #   .exec (error, being) ->
    #     console.log being
    # console.log abel.parents
    # _.each abel.parents, (parentId) ->
    #   mongoose.models.Being.findById parentId,  (error, parent) ->
    #     console.log parent
    #abel.siblings().should.eql [cain.id, jezebel.id]
