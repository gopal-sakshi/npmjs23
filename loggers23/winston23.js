const winston = require('winston');
const { combine, timestamp, printf, colorize, align, errors, json } = winston.format;

/*
    Winston
    - supports 6 log levels --- error, warn, info, http, verbose, debug, silly
    - logger.warn('warning23')       (OR)       logger.log('warn', 'warning23');
    - level: 'info' =======> only log entries below 'info' will be written to transports
    - level: 'http' =======> error, warn, info, http ==== will be written
    - run your application in production at "info" level... staging/dvpt ====> in "debug" level

    https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/#formatting-your-log-messages
    
*/

const logLevelsTelugu = {
    prananthakam: 0,
    pramadam: 1,
    hechharika: 2,
    soochana: 3,
    mottam: 4
};

const winstonCustomLogger23 = winston.createLogger({
    levels: logLevelsTelugu,
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [ new winston.transports.Console ]
});

const log24 = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    

    // // APPROACH I =========> format23 with colored @ console
    // format: combine(
    //     colorize({ all: true }),
    //     timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A'}),
    //     align(),
    //     printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    // ),
    // transports: [ new winston.transports.Console ],

    defaultMeta: { service23: 'jcService33' },

    // APPROACH II =============> json format
    // format: winston.format.json(),
    // format: combine(timestamp(), json()),
    format: combine(errors({ stack: true }), timestamp(), json()),      // otherwise errors are omitted
    transports: [
        // 2 file transports for production... 
            // winston23_error11.log =======> only severe logs are logged
            // winston23_combined11.log ====> all logs are logged
        new winston.transports.File({ filename: 'loggers24/winston23_error11.log', level: 'error' }),
        new winston.transports.File({ filename: 'loggers24/winston23_combined11.log' }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    // log24.add(new winston.transports.Console({
    //     format: winston.format.simple(),
    // }));
}

module.exports = {
    winstonCustomLogger23: winstonCustomLogger23,
    log24: log24
};