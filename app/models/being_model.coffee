window.Townomatic ?= {}

class Townomatic.BeingModel extends Backbone.NestedModel
  defaults:
    genetics: ""
    name: {first: '', last: ''}
    occupation: "Unemployed"
    gender: "N"
    age: 0
    spouses: []
    children: []
    parents: []
