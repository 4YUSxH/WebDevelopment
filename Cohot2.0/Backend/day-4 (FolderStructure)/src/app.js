// 1. Server ko create karna
// 2. Server ko config karna

const express = require("express")

const app = express() // Server created 

app.use(express.json()) // Configuration of Server

const notes = []

// 1st endpoint(api) : method -> POST, /notes -> api name 
app.post("/notes", (req, res) => {
    // console.log(req.body);
    notes.push(req.body)
})

// 2nd endpoint(api) : method -> DELETE, /notes/:index -> api name 
app.delete("/notes/:index", (req, res) => { // :index will contain notes array node that user want to delete
    console.log(req.params);
    
    delete notes[req.params.index]

    res.send("Note deleted successfully")
})

// 3rd endpoint(api) : method -> PATCH, /notes/:index -> api name 
app.patch("notes/:index", (req, res) => { // // :index will contain notes array node that user want to update
    console.log(req.body); // this will contain data which will overwrite in original array

    notes[req.params.index].desc = req.body.desc

    res.send("Note updated")
})


// 4th endpoint(api) : method -> GET, /notes -> api name 
app.get("/notes", (req, res) => {
    res.send(notes)
})

module.exports = app