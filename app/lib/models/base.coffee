class Townomatic.BaseModel extends Backbone.NestedModel
  apiBase = 'http://localhost:8082'
  idAttribute: "_id"


  toCSV: (data, downloadName) ->
    csvContent = 'data:text/csv;charset=utf-8,'
    data.forEach (infoArray, index) ->
      dataString = infoArray.join(',')
      csvContent += if index < data.length then dataString + '\n' else dataString
      return
    encodedUri = encodeURI(csvContent)
    link = document.createElement('a')
    link.setAttribute 'href', encodedUri
    link.setAttribute 'download', downloadName + '.csv'
    link.click()
