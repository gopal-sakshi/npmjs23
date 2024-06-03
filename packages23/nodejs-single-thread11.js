let stop = false;

setTimeout(() => {
    stop = true;
},  1000);

/*
    https://medium.com/nodejsmadeeasy/nodejs-event-loop-lag-5d5928fd03c
    we are setting stop ===> true; after 1 second
    but while loop will continue running (bcoz, stop will never get set to true)
    ie, setTimeout() will never ever be run
    mainThread is blocked running that while() loop 
    and setTimeout() never ever gets control

    SUMMARY ===> event loop also runs in the same thread - Main thread
    (or) "event loop" runs in the same thread as "node program"


    while the main thread is busy no other tasks can be performed by nodejs.
    neither can it react to "expired timeouts" nor can it react to "I/O events" (ie serve other requests)
*/

while (!stop) {
    console.log("I am blocking event loop ");
}