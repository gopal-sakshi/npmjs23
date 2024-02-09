const yargs = require('yargs');
// const args = yargs.parse('--name CR7 --position striker');
// console.log(args);      // args object contains the parsed arguments as key-value pairs.


yargs
.command('hello', 'print hello world', () => {                  // node yargs23.js hello
    console.log('Hello, world!');
})
.command('greet', 'greet someone', (yargs) => {                 // node yargs23.js greet --name casillas
    yargs.option('name', {
        describe: 'name of the person to greet',
        demandOption: true,
        type: 'string'
    });
}, (argv) => {
    console.log(`Hello, ${argv.name}!`);
})
.argv;