const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes.js')
const { demandOption } = require('yargs')

yargs.command({
    command: 'add' ,
    describe: 'Add a node',
    builder: {
        title:{
            describe: 'Node title' ,
            demandOption: true ,
            type: 'string'
        },
        body:{
            describe: 'Message',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>
    notes.addNotes(argv.title , argv.body)
})
 
yargs.command({
    command: 'remove' ,
    describe: 'Remove a node',
    builder:{
        title:{
            describe: 'Get title',
            demandOption: true ,
            type: 'string'
        }
    },
    handler: (argv) =>
    notes.removeNotes(argv.title)
})

yargs.command({
    command: 'read' ,
    describe: 'Read a node' ,
    builder:{
        title: {
            describe: "Read title" ,
            demandOption: true ,
            type: 'string'
        }
    },
    handler: (argv) =>
    notes.readNotes(argv.title)
})

yargs.command({
    command: 'list' ,
    describe: 'List a node',
    handler: () =>{
        console.log(chalk.blue.inverse("Your notes"))
        notes.listNotes()
    }
})

yargs.parse()