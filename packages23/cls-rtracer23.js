/*
    https://itnext.io/request-id-tracing-in-node-js-applications-c517c7dab62d
    https://www.npmjs.com/package/cls-rtracer
    https://itnext.io/one-node-js-cls-api-to-rule-them-all-1670ac66a9e8
*/

const express = require('express');
const router11 = express.Router();
const rTracer = require('cls-rtracer');

async function fnWithNoReqObject() {
    let reqId = rTracer.id()
    console.log('reqId in function without access to req Obj ', reqId);
    return reqId
}

// using reqId only on clsRtracer23 path
router11.get('/check11', rTracer.expressMiddleware(), async (req, res) => {
    const requestId = rTracer.id();
    console.log('requestId =========> ', requestId);
    let blah1 = await fnWithNoReqObject();
    if(blah1 == requestId) { res.send('both ids matched'); }
    else { res.send('phattu'); }
});

module.exports = router11;


