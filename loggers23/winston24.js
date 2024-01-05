const winston = require('winston');

winston.loggers.add('realMadridLogger', {
    level: 'info',
    format: winston.format.logstash(),
    transports: [
        new winston.transports.File({ filename: 'loggers24/winston24_RMA.log'}),
    ],
});

winston.loggers.add('atletiLogger', {
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
});

module.exports = winston