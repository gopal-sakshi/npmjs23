/*
    lru-cache = Least Recently Used cache
    - when the cache memory is full, LRU picks the data that is least recently used and removes it
    
    we can also use redis as a cache... but the machine must have "redis server" running
    - or for simple purposes, we can simply use "lru-cache" which is available as npmjs package

*/

const { LRUCache } = require('lru-cache');
const options23 = {
    max: 3,                   // maximum number of items that remain in the cache
    // maxSize: 5000,              // items greater than this size WILL NOT be cached... if its enabled, sizeCalculation must be set
}

const cache = new LRUCache(options23);
/****************************************************************/

const express = require('express');
const router11 = express.Router();
router11.get('/:number', (req, res) => {
    let key = req.params.number;
    let result = cache.get(key);
    if(result){
        res.send({info:`served from cache`, fact: `${key}__${result}`});
    } else {
        let fact = factorial23(Number(key));
        console.log('key  & fact ===> ', key, fact);
        cache.set(key, fact);
        res.send({info:`freshly calculated`, fact: `${key}__${fact}`})
    }
    console.log('all values in lru-cache ===> ', cache.dump());
});
module.exports = router11;
/****************************************************************/

function factorial23(n) {
    console.log(`calculating factorial of ${n}`);
    if (n == 0 || n == 1) return 1;
    else return n * factorial23(n-1);
}

/*
    27 factorial        = 10888869450418352160768000000
    JavaScript converts integers with more than 21 digits to scientific notation (1.0888869450418352e+28)
*/
