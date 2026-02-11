const { default: mongoose } = require("mongoose");

const noteScheme = new mongoose.Schema({
    title: String,
    desc: String
})

const noteModel = mongoose.model("Testing", noteScheme)

module.exports = noteModel