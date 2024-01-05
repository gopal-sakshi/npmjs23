/*
    https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/



*/

const pino = require('pino');
const pino23 = pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    formatters: {
        level: (label) => {return {severity23: label.toUpperCase()}},
        bindings: (bindings) => { 
            return { 
                processId23: bindings.pid, 
                host23: bindings.hostname,
                customField23: `edoString__nodeVersion =` + process.version 
            } 
        }
    },
    // timestamp: pino23.stdTimeFunctions.unixTime,
    // timestamp: pino23.stdTimeFunctions.isoTime,
    timestamp: () => `, "time23":${new Date().toLocaleString()}`,
});

const pinoFile24 = pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    formatters: {
        level: (label) => { return { level: label.toUpperCase() }; },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    // fileTransport: pino.transport({
    //     target: 'pino/file',
    //     options: { destination: `${__dirname}/pinoFile.log`  }
    // }),
    redact: ['club23.phoneNo', 'club23.accountNo']
}, pino.destination("loggers24/pinoDestLog.log"))

module.exports = {
    pino23: pino23,
    pinoFile24: pinoFile24
}