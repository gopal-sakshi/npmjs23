const express = require('express');
const router = express.Router();

const cors = require('cors');

let corsOptions = {
    origin      : ['http://127.0.0.1:9100'],           // allow requests only from 9100 port
    // origin      : '*',
    methods     : ['GET', 'POST', 'DELETE', 'HEAD', 'PUT', 'OPTIONS'],
    credentials : true,
};

router.get('/path23', cors(), (req, res) => {
    res.send(`allowing requests from ${req.url} origin`);
})

module.exports = router;