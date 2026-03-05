const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()}) // Using multer for working with files in express 

// POST, /api/posts/, [protected]
// req.body = { caption, image-file } 
// We are handeling files in this api

postRouter.post("/", upload.single("image"), postController.createPostContoller)

module.exports = postRouter