/*
    Just run     ===> node packages23/npm_aliasing23_run_directly.js

    HOW TO USE multiple versions of same dependency
    (OR) IT seems, we can have two versions of same library in package.json 

    npm install lodash23_v3@npm:lodash@3.10.1
    npm install lodash24_v4@npm:lodash@4.17.21

*/

const { _:lodashv3 } = require('lodash23_v3');
const { _:lodashv4 } = require('lodash24_v4');


console.log("squares using lodash v3 ===> ", lodashv3.map([1,3,5,7], (elem) => elem * elem));
console.log("squares using lodash v4 ===> ", lodashv4.map([4,3,2,1], (elem) => elem * elem));