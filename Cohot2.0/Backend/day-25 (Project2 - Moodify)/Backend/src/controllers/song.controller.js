const id3 = require("node-id3")
const imageKitSongUpload = require("../services/imagekit.service")
const songModel =  require("../models/song.model")

const uploadSongController = async (req, res) => {
    const songBuffer = req.file.buffer

    const tags = id3.read(songBuffer)
    
    const imageBuffer = tags.image.imageBuffer

    const {songFile, posterFile} = await imageKitSongUpload(tags, imageBuffer, songBuffer)

    const song = await songModel.create({
        url: songFile.url,
        posterUrl: posterFile.url,
        mood: req.body.mood
    })

    res.status(201).json({
        message: "Song uploaded successfully",
        song
    })
}

const getSongController = async (req, res) => {
    const mood = req.query.mood

    const song = await songModel.findOne({
        mood: mood
    })

    res.status(200).json({
        message: "Song fetched successfully",
        song
    })
}

module.exports = {uploadSongController, getSongController}