const yargs = require('yargs')

// command takes 4 options ----> command, description, builder, handler

yargs.command(
    'multiply23',                           // 1st param
    'see yargs25.js for different yargs command style',                 // 2nd param

    (yargs) => {                    // 3rd param... "builder" can be object (or) function... here its function
        yargs
        .option('param1', { number: true })
        .option('param2', { number: true })
        .check(({ param1, param2}) => {
            if(param1 > 9 || param2 > 9) { throw new Error('arey 9 kante ekkuva ivvaddu'); }
            else if (!param1 || !param2) { throw new Error('arguments pass cheyyalammaaa'); }
            return true
        })
    },

    (argv) => {                     // 4th param... this is "handler" function
        console.log('product ====> ', argv.param1 * argv.param2)
    }
)

yargs.parse();


/*
    node yargs25_command.js multiply23 --param1 3 --param2 10                   // THROWS ERROR
    node yargs25_command.js multiply23  

    node yargs25_command.js multiply23 --param1 3 --param2 5                    // WORKS
*/