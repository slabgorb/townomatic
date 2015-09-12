window.Townomatic ?= {}

class Townomatic.BeingModel extends Backbone.NestedModel
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
