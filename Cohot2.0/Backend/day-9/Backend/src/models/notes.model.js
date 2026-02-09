const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    desc: String
})

const noteModel = mongoose.model("fullstack", noteSchema)

module.exports = noteModel