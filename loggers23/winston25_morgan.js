const winston = require('winston');
const morgan = require('morgan');
const { combine, timestamp, json } = winston.format;


const winston25 = winston.createLogger({
    level: 'http',
    format: combine(timestamp(), json()),
    transports: [new winston.transports.Console()],
});


// const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
//     stream: { write: (message) => winston25.http(message.trim()) },
// });

const morganMiddleware = morgan(function (tokens, req, res) {
        return JSON.stringify({
            method: tokens.method(req, res),
            url: tokens.url(req, res),
            status: Number.parseFloat(tokens.status(req, res)),
            content_length: tokens.res(req, res, 'content-length'),
            response_time: Number.parseFloat(tokens['response-time'](req, res)),
        });
    }, 
    { stream: {
        write: (message) => {
            const data = JSON.parse(message);
            winston25.http(`incomingRequest23`, data);
        },
    },
});

module.exports = {
    morganMiddleware: morganMiddleware,
    winston25: winston25
}