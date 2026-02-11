const express = require("express")
const cors = require("cors")
const noteModel = require("./models/notes.model")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

app.post("/api/notes", async (req, res) => {
    const {title, desc} = req.body

    const created_notes = await noteModel.create({
        title, desc,
    })

    res.status(201).json({
        message: "Note Created",
        created_notes
    })
})

app.get("/api/notes", async (req, res) => {
    const fetched_notes = await noteModel.find()
    
    res.status(200).json({
        message: "Notes Fetched",
        fetched_notes
    })
})

app.delete("/api/notes/:id", async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message: "Note Deleted"
    })
})

app.patch("/api/notes/:id", async (req, res) => {
    const {title} = req.body
    await noteModel.findByIdAndUpdate(req.params.id, {title})

    res.status(200).json({
        message: "Note Updated"
    })
})

// Wildcard Route API
app.use("*name", (req, res) => {
    res.sendFile(__dirname, "..", "public/index.html")
})

module.exports = app