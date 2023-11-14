const { createLogger, format, transports} = require("winston");

const logger = createLogger({
    transports :[
        new transports.Console(),
        new transports.File({
          level: 'warn',
          filename: './logger/logsWarnings.log'
        }),
        new transports.File({
          level:'error',
          filename: './logger/logsError.log'
        }),
      ],
      format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
      )
})

module.exports = {logger}