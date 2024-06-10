var monitor23 = require("./prom-client23");

module.exports = function eventLoopLag(ms) {

    var start = process.hrtime.bigint();
    console.log("start_time ====> ", start);
    var delay = 0;

    var timeout = setTimeout(check, ms);
    // timeout.unref();

    function check() {
        console.log("callback of setTimeout invoked ")
        clearTimeout(timeout);
        var t = process.hrtime.bigint();
        delay = Math.max(0, Number(t - start) - ms);
        monitor23.observe23('event_loop_lag', ['ELL ante ento', 'antha confusing'], delay);
        start = t;
        timeout = setTimeout(check, ms);
        // timeout.unref();
    }
    
    return function () {
        return delay;
    };
};