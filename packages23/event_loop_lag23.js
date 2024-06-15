// DOESNT WORKKKKKKKKKKKKK ----> DONT BOTHERRRRRRRRRRRRRR

const sleep = (time) => new Promise ((resolve, reject) => { setTimeout(() => { resolve('done23')}, time)})
const http = require('http');
http.createServer(async (req, res) => {
    console.log("incoming request 23 ", req.url);
    if(req.url == '/2000') {
        console.log("blocking event loop for 2000 seconds ");
        await sleep(2000);
        console.log("2sec ayyaayaa")
        res.write("undavayyaa 2000 seconds nidrapoyaa \n");
        res.end();
    } else if (req.url == '/5000') {
        console.log("blocking event loop for 5000 seconds ");
        await sleep(5000);
        console.log("5sec ayyaayaa")
        res.write("undavayyaa 5000 seconds nidrapoyaa \n");
        res.end();
    } else {
        res.write("edo oka time ivvu");
        res.end();
    }
}).listen(3000);
console.log('Server running...');

var interval = 2000;
var blockDelta = 4000;

setInterval(function() {
    var last = process.hrtime.bigint();
    // console.log("last23 =====> ", last)
    setImmediate(function() {
        var delta = Number(process.hrtime.bigint() - last) / 1000;
        console.log("delta23 ===> ", delta)
        if (delta > blockDelta) {
            console.log("node.eventloop_blocked23 ====> ", delta);
        } else {
            // console.log("setImmediate executed within ===> ", delta + "seconds");
        }
    });
}, interval);