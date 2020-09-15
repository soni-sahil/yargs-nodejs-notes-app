const fs=require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return ("Your notes...")
}

// ----------------Adding the node-----------------

const addNotes = (title , body) =>{
    const notes =loadNotes()

    debugger

    const newNotes = notes.find(note =>{
        return note.title === title
    })

    if(!newNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Added successfully"))
    }
    else{
        console.log(chalk.red.inverse("Title exist"))
    }
}

const saveNotes =(notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFile('notes.json' , dataJson , err => {
        if(err) throw err
    })
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

// ----------------Removing the node-----------------

const removeNotes = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter(note =>{
        return note.title !== title
    })

    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse("No note found"))
    }
    else{
        console.log(chalk.green.inverse("Note Removed"))
        saveNotes(notesToKeep)
    }
}

// ----------------Listing the node-----------------
const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}

// ----------------Reading the node-----------------

const readNotes = (title) =>{
    const notes = loadNotes()
    const duplicatenote = notes.find(note =>{
        return note.title === title
    })
    if(!duplicatenote){
        console.log("No such title found")
    }
    else{
        console.log(`Title: ${duplicatenote.title}`)
        console.log(`Body: ${duplicatenote.body}`)
    }
}
module.exports = {
    getNotes: getNotes ,
    addNotes: addNotes ,
    removeNotes: removeNotes ,
    listNotes: listNotes ,
    readNotes: readNotes
}