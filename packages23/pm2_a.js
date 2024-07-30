const express = require('express');
const router11 = express.Router();


router11.get('/', (req, res) => {
    res.status(200).send({
        info: 'learnin how pm2 works',
        time23: new Date().toISOString(),
        hero23: 'maheshbabu'
    })
});

router11.get('/crash23', (req, res) => {
    res.status(200).send({
        info: 'crashing node intentionally - to see if pm2 restarts',
        time23: new Date().toISOString()
    });
    process.exit(1);
    /*
        we are intentionally crashing...
        start 3 instances of application
        hit this /crash23 endpoint ---> the instance which receives the request is crashed
        but restarted instantly ---> you can confirm this --> npx pm2 list (restart count column (or) uptime column)
    */
});

module.exports = router11;