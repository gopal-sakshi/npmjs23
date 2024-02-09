var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('knowledge', 'Insert the knowledge base templates from csv to db')
    .command('theme', 'Insert UI template theme from json to db')
    .example(`node $0 -t knowledge -f path_to_file.xlxs`)
    .example(`node $0 -t theme -f path_to_file.json`)
    .alias('t', 'type')
    .nargs('t', 1)
    .describe('t', 'type of template')
    .choices('t', ['knowledge', 'theme'])
    .alias('f', 'file')
    .describe('f', 'absolute path of the file')
    .alias('n', 'name')
    .describe('n', 'Name of the template')
    .alias('d', 'description')
    .describe('d', 'Description of the template')
    .alias('i', 'imageUrl')
    .describe('i', 'image url for the template')
    .alias('c', 'category')
    .describe('c', 'category name of the template')
    // .demandOption(['t', 'f', 'n', 'i'])
    .demandOption(['t', 'f', 'i'])
    .argv;

/*
    node yargs26.js -t knowledge -f input1.txt -n name23 -i imageUrl12
    node yargs26.js -t knowledge -f input1.txt -i imageUrl12                    // demandOption = t|f|i

    https://github.com/yargs/yargs/blob/main/docs/api.md

*/

let imageUrl = argv.imageUrl;
let imageUrlAlias = argv.i;
console.log(imageUrl, imageUrlAlias);

