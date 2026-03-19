const mongoose = require("mongoose")

// Creation of Schema
const noteSchema = new mongoose.Schema({
    title : String,
    desc : String
})

// Creation of Model
const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel