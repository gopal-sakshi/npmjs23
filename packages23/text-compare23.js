var levenshtein = require('fast-levenshtein');

let str1 = 'Execution of works under IPDS scheme for Janjgir-Champa Circle under Project Division, Janjgir-Champa.';
let str2 = 'Execution of works under IPDS sAhcme for Janjgir-Champa Circle under Project Division, Janjgir-Champa.';

var distance11 = levenshtein.get('back', 'book');
var distance12 = levenshtein.get(str1,str2);

// console.log(distance11);
console.log(distance12);
/**********************************************/

// var fs = require('fs');
// var text1 = fs.readFileSync('packages23/text-compare1.txt', 'utf-8');
// var text2 = fs.readFileSync('packages23/text-compare2.txt', 'utf-8');
// var distance13 = levenshtein.get(text1, text2);
// console.log(distance13);



// let similarity23 = ('back'.length - distance11) / 'back'.length;
let similarity23 = (str1.length - distance12) / str1.length;
// let similarity23 = (text1.length - distance13) / text1.length;

console.log('similarity ====> ',similarity23);
/**********************************************/