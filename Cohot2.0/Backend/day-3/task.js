// It is small task based on RESTFUL APIs
// We have to program a server where user can create notes and delete notes

const express = require("express")

const app = express()

let notes = [] // empty array

app.use(express.json()) // middleware

// Creating 1st API or Endpoint for note creation
app.post("/notes", (req, res) => { // "/notes" -> API name
    console.log(req.body)
    notes.push(req.body)
    // req -> Client side se jitna bhi data/resources aayenge usse req ke through access karnge

    res.send("Note created")
    // res -> Through res we can show data on frontend/client side
})

// Creating 2st API or Endpoint for showing created note on frontend(client side)
app.get("/notes", (req, res) => {
    res.send(notes)
})

app.listen(3000, () => {
    console.log("Server is running");
})