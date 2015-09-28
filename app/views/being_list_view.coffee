class Townomatic.BeingListView extends Townomatic.ListView
  templateName: 'being_list'
  childClass: Townomatic.BeingListItemView
  collectionClass: Townomatic.BeingCollection
  formTemplateName: 'being_form'
  modelClass: Townomatic.BeingModel

  events:
    "click .add-being": 'addNew'


  addNew: () ->
    attributes = _. object(_.map(@$('#new-being input, #new-being select'), (input) -> [$(input).attr('data-field'),  $(input).val()]) )
    attributes =
      name:
        first: attributes['name.first']
        last: attributes['name.last']
      occupation: attributes.occupation
      genetics: attributes.genetics
      gender: attributes.gender
      age: attributes.age
    model = new Townomatic.BeingModel()
    model.set(attributes)

    console.log(model)

    @collection.add(model)
