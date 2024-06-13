const express = require('express');
const debug = require('debug');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const server23 = app.listen(12238, (err) => { console.log('listening on 12238'); });

app.get('/movies23', async(req, res) => {
    let respObj = {
        success23: 'success25',
        reqHeader23: req.headers['custom-header23'],
        movies23: ["pokiri", "murari", "okkadu"]
    }
    res.status(200).send(respObj);
});

app.get('/moviesByLang/:lang23', async (req, res) => {
    const lang23 = req.params.lang23;
    if(lang23 == 'tamil') { res.status(422).send({ info: "we wont send tamil movies" }) }
    else {
        res.status(200).send({
            movies24: ['Baahubali', 'RRR'],
            rcvdLang: lang23
        });
    }
});

module.exports = { 
    app,
    stopServer: () => server23.close() 
}
