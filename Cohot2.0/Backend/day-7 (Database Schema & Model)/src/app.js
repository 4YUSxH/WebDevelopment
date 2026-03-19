const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

// Post /notes
// req.body = {title, desc} 
app.post("/notes", async (req, res) => {
    const {title, desc} = req.body // Destructuring
    
    // Use async await cause we dont know how much time this process will take for storing data on mumbai database server
    const note = await noteModel.create({ 
        title, desc // Create will store both data in database
    })

    res.status(201).json({
        message: "Note Created",
        note
    })
})

// Get /notes
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find() // .find() method reads all the data in database and return it as an arary of objects



    res.status(200).json({
        message: "Notes Fetched",
        notes
    })
})


module.exports = app

// Data store in database in like this 
// {
//     "message": "Note Created",
//     "note": { 
//         "title": "title2",
//         "desc": "Desc2",
//         "_id": "6984b1c5de5903e69ee6e172", // unique id assgin by moongse for identification 
//         "__v": 0
//     }
// }
// "_id": "6984b1c5de5903e69ee6e172", // Unique ID assgin by mongoose to each note 