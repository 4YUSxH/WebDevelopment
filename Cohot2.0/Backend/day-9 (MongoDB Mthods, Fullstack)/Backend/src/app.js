const express = require("express")
const noteModel = require("./models/notes.model")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

/** 
 * - POST "/api/notes"
 * - Create new note and save data in mongodb
 * - {title, desc} = req.body 
*/
app.post("/api/notes", async (req, res) => {
    const {title, desc} = req.body // Destructuring
    
    const note = await noteModel.create({
        title, desc
    })
    
    res.status(201).json({
        message: "Note Created",
        note
    })
})

/** 
 * - GET "/api/notes"
 * - Fetch all the notes data from mongodb and send then in the response
*/
app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes Fetched",
        notes
    })
})

/** 
 * - DELETE "/api/notes/:id"
 * - Delete note with the id from req.params
*/
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id 

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note Deleted",
        
    })
})

/** 
 * - PATCH "/api/notes/:id"
 * - Update the desc of note by id
 * - {desc} = req.body 
*/
app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const {desc} = req.body
    
    await noteModel.findByIdAndUpdate(id, {desc})

    res.status(200).json({
        message: "Note Updated"
    })
})

console.log("Path: " + __dirname);// Path of current working directory

app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app