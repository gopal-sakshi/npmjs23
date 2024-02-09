const yargs = require('yargs')

// Customize yargs version 
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add23',
    describe: 'rendu numbers ni add chestundi',
    builder: {
        firstNumber: {
            describe: 'modatidi',
            demandOption: true,
            type: 'number'
        },
        secondNumber: {
            describe: 'rendovadi',
            demandOption: true,
            type: 'number'
        }
    },

    // Function for your command 
    handler(argv) {
        console.log("Result:",(argv.firstNumber + argv.secondNumber))
    }
})

yargs.parse()

/*
    node yargs25.js add23 --firstNumber=23 --secondNumber=12            // Result: 34
    node yargs25.js add23 --firstNumber=23                              // Missing required argument: secondNumber
*/