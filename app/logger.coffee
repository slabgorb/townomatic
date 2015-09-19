#
# this class should be used for debugging purposes
#
class Townomatic.logger
  constructor: (logLevel = 'info') ->
    @logLevel = logLevel
    @levels = {info: 0, debug: 1, error: 2, fatal: 3, unknown: 4}

  log: (level, title, messages...) ->
    if @levels[level] >= @levels[@logLevel]
      console.log(_.last(new Date().toJSON().split("T")).replace('Z',''), title, messages)

  debug: (title, messages...) ->
    @log('debug', title, messages)
