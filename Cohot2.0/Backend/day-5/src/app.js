const express = require("express")

const app = express()

app.use(express.json())

const notes = []

// Creating 1st api
app.post("/notes", (req, res) => {
    notes.push(req.body)

    // We send response message with status code 
    res.status(201).json({ // Always send response in json format
        message : "Note Created"
    })
})

// Creating 2nd api
app.get("/notes", (req, res) => {
    res.status(200).json({
        notes : notes,
        message : "Note Fetched"
    })
})

// Creating 3rd api
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index] // 'delete' keyword and it will replace data with 'null'
    res.status(200).json({
        message : "Note Deleted"
    })
})

// Creating 4th api
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].desc = req.body.desc
    res.status(200).json({
        message : "Note Updated"
    })
})








module.exports = app