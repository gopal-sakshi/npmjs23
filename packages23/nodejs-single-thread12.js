console.time('eventlooplag23');

setTimeout(() => {
    console.timeEnd('eventlooplag23');
    console.log("time, timeEnd ===> total time taken is displayed above ")
}, 1000);

const primes = [];
function generatePrimes(start, range) {
    let isPrime = true;
    let end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = 2; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("this is a prime ===> ", i);
        }
        isPrime = true;
    }
}
generatePrimes(2, 5000000);

/*
    Event loop lag
    - an estimation of the time span between the "scheduling of a callback" and "its execution"
    - the longer the average lag ====> the more synchronous code is being executed
    - time for you to tweak your APIs code for better performance.
*/