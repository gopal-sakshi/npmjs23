/*
    most times, we get arguments/parameters and process them...
    but its not necessary to process them there itself... its just we mandate that certain params are needed
    in yargs25_command1.js      === we take 2 params, we multiply and console the result
                                === here, we wont do any such stuff
                                === we just mandate that certain stuff is needed
*/


const yargs = require('yargs')

let argv23 = yargs
.command(
    'seedImages', 
    'seedImages ki description',
    (yargs23) => yargs23.default('value', 'true'),
    (argv) => console.log(`setting ${argv.path23} to ${argv.value23}`)
)
.command('seedPdf', 'seedPdf ki description')
.demandCommand(1, 'images (or) pdf edo okati seed cheyyaali maastaaru')
.demandOption(['path23', 'value23'], 'hello - path23 & value23 ivvaali mastaaru')
.argv


console.log('seed cheyyalsina path ====> ', argv23.path23, argv23.value23);

// https://github.com/yargs/yargs/issues/1616