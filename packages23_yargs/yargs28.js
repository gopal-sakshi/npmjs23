#!/usr/bin/env node
const yargs = require('yargs')
// const { hideBin } = require('yargs/helpers')

yargs
.command(
    'serve [port]', 
    'start the server', 
    (yargs) => { 
        return yargs.positional('port', {
            describe: 'port to bind on',
            default: 5000
        })
    }, (argv) => {
        if (argv.verbose) console.info(`start server on :${argv.port}`)
        serve44(argv.port)
    })
.option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
})
.parse()


function serve44(port23) {
    console.log('mothaniki port info vachinidi gaa ', port23);
}