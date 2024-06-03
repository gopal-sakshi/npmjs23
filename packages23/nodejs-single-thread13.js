// const bcrypt = require("bcryptjs")
const bcrypt = require("bcrypt")


/*
    https://davidhettler.net/blog/event-loop-lag/

    asynchronous code === NOT EQUAL TO ===== non-blocking code

    While bcryptjs is written in Javascript, bcrypt is written in C++
    the calculation of hashes has moved entirely to another thread ---> freeing up nodejs to run "measureLag"

    https://nodejs.org/api/addons.html
    https://lakin-mohapatra.medium.com/the-real-deal-with-node-js-event-loop-misconceptions-unmasking-the-truth-15c4bc4d197d

*/

function measureLag(iteration) {
    const start = new Date()
    setTimeout(() => {
        const lag = new Date() - start
        console.log(`Loop ${iteration} took\t${lag} ms`)
        measureLag(iteration + 1) // Recurse
    })
}
measureLag(1)

function hash() {
    const start = new Date()
    const hashRounds = 10 // The more hash rounds the longer hashing takes
    bcrypt.hash("hash me!", hashRounds, () => {
        console.log(`--------- Hashing took ${new Date() - start} ms`)
        setTimeout(hash)
    });
}
hash()