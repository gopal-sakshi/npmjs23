#!/usr/bin/env node

require('yargs')
    .scriptName("pirate-parser")
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'welcome ter yargs!', (yargs) => {
        yargs.positional('name', {
            type: 'string',
            default: 'Cambi23',
            describe: 'the name to say hello to'
        })
    }, function (argv) {
        console.log('hello', argv.name, 'welcome to yargs!')
    })
    .help()
    .argv


/*
    node yargs24.js --help
    node yargs24.js hello CR7
    node yargs24.js hello --name CR7
    node yargs24.js hello                       // default value of 'Cambi23' is taken
*/