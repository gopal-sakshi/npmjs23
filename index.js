const express = require('express');
const debug = require('debug');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.listen(3033, (err) => { console.log('listening on 3033'); });




/****************************   PACKAGES *************************************/

// json5
// require('./packages23/json5_23');

// cls-rtracer
// app.use(rTracer.expressMiddleware());            // use the middleware across all routes
app.use('/clsRtracer23', require('./packages23/cls-rtracer23'));


// loggers - pino, winston, morgan, npmlog
app.use('/loggers23', require('./packages23/loggerPackages23'));

// lru-cache
app.use('/lru23', require('./packages23/lru-cache23'));

// cors23
app.use('/cors23', require('./middleware23/cors11'));

// joi validation               // it has ERRORS
// app.use('/joi23', require('./middleware23/joi23'));

// excelJs & sheetJS
app.use('/excel23', require('./packages23/exceljs23'));
app.use('/xlsx23', require('./packages23/xlsx23'))

/*****************************************************/
app.get('/path1', (req, res) => {
    debug('base path');
    res.send({ info: `you've requested path1, hrtime ==> ${process.hrtime.bigint()}` });
});

/******************************* CLS RTRACER *****************************/




app.get('/', (req, res) => {
    res.send({ info: `base path` });
});

