class Townomatic.BeingsCollectionView extends Townomatic.ListView
  templateName = 'beings_collection'
  childClass = Townomatic.BeingView

  events:
    "click .add-being": 'addNew'


  addNew: () ->
    attributes = _. object(_.map(@$('#new-being input, #new-being select'), (input) -> [$(input).attr('data-field'),  $(input).val()]) )
    console.log attributes
    attributes =
      name:
        first: attributes['name.first']
        last: attributes['name.last']
      occupation: attributes.occupation
      genetics: attributes.genetics
      gender: attributes.gender
      age: attributes.age
    console.log attributes
    model = new Townomatic.BeingModel()
    model.set(attributes)

    console.log(model)

    @collection.add(model)
