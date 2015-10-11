#
# this class should be used for debugging purposes
#
class Townomatic.logger
  constructor: (logLevel = 'info') ->
    @logLevel = logLevel
    @levels = {info: 0, debug: 1, error: 2, fatal: 3, unknown: 4}

  log: (level, title, messages...) ->
    if @levels[level] >= @levels[@logLevel]
      console.group(_.last(new Date().toJSON().split("T")).replace('Z',''), title, @traceline())
      _.each messages, (message) ->
        console.log(message)
      console.groupEnd('')

  traceline: ->
    err = new Error()
    err.stack.split("\n")[4]


  debug: (title, messages...) ->
    @log('debug', title, messages)
