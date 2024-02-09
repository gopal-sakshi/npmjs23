const yargs = require('yargs');
// const args = yargs.parse('--name CR7 --position striker');
// console.log(args);      // args object contains the parsed arguments as key-value pairs.


yargs
.command('greetCommand23', 'greet someone', (yargs) => {                 // node yargs23.js greet --name casillas
    yargs.option('name11', {
        describe: 'name of the person to greet',
        demandOption: true,
        type: 'string'
    });
}, (argv) => {
    console.log(`Hello, ${argv.name11}! - bane invoke chesaam ga`);
})
.parse("greetCommand23 --name11 CR7")