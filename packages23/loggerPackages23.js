const express = require('express');
const router12 = express.Router();
const axios = require('axios');
/************************ logger packages **************************/
const { npmlog23 } = require('../loggers23/npmlog23');
const { winstonCustomLogger23, log24 } = require('../loggers23/winston23');

const winston = require('../loggers23/winston24');      // it has multiple loggers
const rmaLogger = winston.loggers.get('realMadridLogger');
const atletiLogger = winston.loggers.get('atletiLogger');
const { morganMiddleware } = require('../loggers23/winston25_morgan');
const { pinoFile24, pino23 } = require('../loggers23/pino23');
/************************ logger packages **************************/


router12.get('/npmlog11', (req, res) => {
    npmlog23.info('jc11', 'this is message %j', {info: 'npmlog Obj'});
    npmlog23.warn('warnPrefix23', 'obj23 = %j', { foo: { bar: 'baz' } });
    npmlog23.verbose('verbosePrefix23', 'RMA = %j', { club23: { name: 'RealMadrid' } });
    npmlog23.error('errorPrefix23', 'x = %j', { foo: { bar: 'baz' } })
    res.send('npmlog11 endpoint');
});

router12.get('/winston11', (req, res) => {
    
    log24.info('winston logs printed in json format');
    log24.debug('will debug logs get printed ???');
    log24.error('will error logs get printed ???');
    log24.error(new Error("if u dont use errors({stack: true}), errMsg23 wont show"));

    log24.warn('will warning logs get printed ???');
    res.send('winston11 endpoint');
});

router12.get('/winston12/:clubId', (req, res) => {
    let club = req.params.clubId;
    if(club == 'RMA') {
        /*  
            new Date()                                  Thu Jan 04 2024 21:44:04 GMT+0530 (India Standard Time)
            new Date().toISOString()                    2024-01-04T16:14:31.561Z    (gmt timestamp)
            new Date().toLocaleString()                 1/4/2024, 9:46:26 PM        (mm-dd-yyyy format)
            new Date().toLocaleString('en-IN')          4/1/2024, 9:49:46 pm        (dd-mm-yyyy format)
        */
        rmaLogger.log('info', `log stored in a file @ time == ${new Date().toLocaleString('en-IN')}`);
    } else {
        atletiLogger.log('warn', `logged just to console club ===> ${club}`);
    }
    res.send('winston multiple loggers utiliseddd');
});

router12.get('/winston13/morgan1', morganMiddleware, async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/users?per_page=2');
        
        // const response = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
        // const response = await axios.get('https://api2.binance.com/api/v3/exchangeInfo');
        // const response = await axios.get('https://api2.binance.com/api/v3/ticker/NEOBTC');
        const data23 = response.data;
        res.send(data23);
    } catch (err) {
        res.status(500).send('Internal server error ');
    }
});

router12.get('/winston13/morgan2', morganMiddleware, async (req, res) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
        const data23 = response.data;
        res.send(data23);
    } catch (err) {
        res.status(500).send('Internal server error ');
    }
});


/* NOT WORKINGGGGGGGGGGGGGGGGGGGGGGGGG */
router12.get('/customWinston11', (req, res) => {
    winstonCustomLogger23.prananthakam('prananthakam message23');
    winstonCustomLogger23.pramadam('pramadam message23');
    winstonCustomLogger23.hechharika('Hechharika message23');
    winstonCustomLogger23.soochana('soochana message23');
    winstonCustomLogger23.mottam('mottam message23');
    res.send('custom winston11 endpoint');
});

router12.get('/pino11', (req, res) => {
    pino23.warn('Hello world23, this is a warning');
    pino23.info({context23: 'urike Context add chesaa'},'Hello world23, this is an info');
    pino23.error('Hello world23, this is an error');
    res.send('pino11 endpoint');
});

router12.get('/pino12/:userId', (req, res) => {
    // using childLogger, we can add context23
    let userId = req.params.userId;
    pino23.info('ikkada em context undaduuu');
    const childLogger = pino23.child({ userPeru: userId });
    childLogger.info('ee child logger lo malli context vastundi');
    res.send('pino12 endpoint');
});

router12.get('/pino13', (req, res) => {
    pinoFile24.warn('ee logs anni file lo ki save autaayi');
    let club23 = {
        name: 'RMA', phoneNo: '234-234-4355', stadium: 'Bernabeu', accountNo: '20065443234221'
    }
    pinoFile24.info({club23}, 'club23 phone No, account No kanapadavu');
    res.send('pino13 endpoint');
});

module.exports = router12;