# yargs-nodejs-notes-app

Using yargs in node js to get input from terminal in the application

Install yargs using command
    
    npm i yargs

import the yargs in the file using 
    
    const yargs = require('yargs')

Create the command using yargs in the file
    
    yargs.command({
      --your code--
    })

also parse the yargs for the working of yargs
    
    yargs.parse()
