const {Router} = require("express")
const { uploadSongController, getSongController } = require("../controllers/song.controller")
const { upload } = require("../middlewares/upload.middleware")

const songRouter = Router()

songRouter.post("/", upload.single("song"), uploadSongController)
songRouter.get("/get-song", getSongController)

module.exports = songRouter