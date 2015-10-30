$.fn.selectRange = (start, end) ->
  e = document.getElementById($(this).attr('id'))
  if !e
    return
  else if e.setSelectionRange
    e.focus()
    e.setSelectionRange start, end
  else if e.createTextRange
    range = e.createTextRange()
    range.collapse true
    range.moveEnd 'character', end
    range.moveStart 'character', start
    range.select()
  else if e.selectionStart
    e.selectionStart = start
    e.selectionEnd = end
  return
