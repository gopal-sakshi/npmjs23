const express = require('express');
const router11 = express.Router();

router11.get('/:hero23', (req, res) => {
    let movies23 = [];
    if(req.params.hero23 == 'maheshbabu') {
        movies23.push(...["pokiri", "murari", "okkadu"])
    } else if (req.params.hero23 == 'ntr') {
        movies23.push(...["simhadri", "aadi", "ashok"])
    }
    res.status(200).send({
        hero23: req.params.hero23,
        movies24: movies23
    })
})

router11.post('/hero23', (req, res) => {
    console.log("req payload ===> ", req.body)
    let movies23 = [];
    if(req.body.hero23 == 'maheshbabu') {
        movies23.push(...["pokiri", "murari", "okkadu"])
    } else if (req.body.hero23 == 'ntr') {
        movies23.push(...["simhadri", "aadi", "ashok"])
    }
    res.status(200).send({
        hero23: req.body.hero23,
        movies24: movies23
    })
})

router11.get('/', (req, res) => {
    res.status(200).send({
        info: 'learn postman pre request scripts23',
        time23: new Date().toISOString(),
        hero23: 'maheshbabu'
    })
});



module.exports = router11;