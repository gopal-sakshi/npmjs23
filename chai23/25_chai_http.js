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

module.exports = { 
    app,
    stopServer: () => server23.close() 
}
