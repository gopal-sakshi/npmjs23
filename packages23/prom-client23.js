const express = require('express');
const router11 = express.Router();

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();

/*******************************************************************/
// collectDefaultMetrics({ register });
collectDefaultMetrics({ 
    register:register,
    prefix: "prom23_npmjs23__"
});

const http_request_counter23 = new client.Counter({
    name: 'enni_requests_vachaayi',
    help: 'Count of HTTP requests made to my app',
    labelNames: ['method', 'route', 'statusCode'],
});

const http_request_duration23 = new client.Histogram({
    name: 'request_time_entha',
    help: 'Duration of HTTP requests in milliseconds.',
    labelNames: ['method', 'route', 'code'],
    buckets: [1,2,3,4,5,10,25,50,100,250,500,1000],
})


register.registerMetric(http_request_counter23);
register.registerMetric(http_request_duration23);

// adding middleware
router11.use(function(req, res, next){

    res.locals.startEpoch = Date.now();

    http_request_counter23.labels({
        method: req.method, 
        route: req.originalUrl, 
        statusCode: res.statusCode}).inc();
    next();

    const responseTimeInMilliseconds23 = Date.now() - res.locals.startEpoch;

    http_request_duration23
    .labels(req.method, req.route.path, res.statusCode)
    .observe(responseTimeInMilliseconds23)

    
});

/*******************************************************************/

router11.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type',register.contentType);
    let data = await register.metrics();
    res.status(200).send(data);
});

router11.get('/football11', async (req, res) => {
    res.status(200).send({info: 'football path requested', time23: new Date().toISOString()})
});

router11.get('/football12', async (req, res) => {
    for (let i=0; i<1e5; i++ ) {
        for (let i=0; i<1e5; i++ ) { }
    }
    res.status(404).send({info: 'football12 requested - status code is 404', time24: new Date().toISOString()})
});

module.exports = router11;