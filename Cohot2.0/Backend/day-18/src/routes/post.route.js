const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const identifyUser = require("../middlewares/auth.middleware")
const upload = multer({storage: multer.memoryStorage()}) // Using multer for working with files in express 

// POST, /api/posts/, [protected]
// req.body = { caption, image-file } 
// We are handeling files in this api
postRouter.post("/", upload.single("image"), identifyUser , postController.createPostContoller)

// GET, /api/posts/, [protected] 
// Returns all the posts of particular user
postRouter.get("/", identifyUser, postController.getPostController)

// GET, /api/posts/details/:postId, [protected] 
// Returns the details about specific post with the id, also check whether the post belongs to the user that the request come from
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

// Route - GET -> /api/posts/like/:postId
// Description - Like a post with id provided in the req.params
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

module.exports = postRouter