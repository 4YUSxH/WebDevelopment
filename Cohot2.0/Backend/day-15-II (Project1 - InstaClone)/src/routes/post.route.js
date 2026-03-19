const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()}) // Using multer for working with files in express 

// POST, /api/posts/, [protected]
// req.body = { caption, image-file } 
// We are handeling files in this api
postRouter.post("/", upload.single("image"), postController.createPostContoller)

// GET, /api/posts/, [protected] 
// Returns all the posts of particular user
postRouter.get("/", postController.getPostController)

// GET, /api/posts/details/:postId, [protected] 
// Returns the details about specific post with the id, also check whether the post belongs to the user that the request come from
postRouter.get("/details/:postId", postController.getPostDetailsController)

module.exports = postRouter