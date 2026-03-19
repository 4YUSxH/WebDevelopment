const express = require("express")
const { followUserController, unfollowUserController } = require("../controller/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const userRouter = express.Router()

// Route - POST -> /api/users/follow/:userId
// Description - Follow a user
// Access - Private
userRouter.post("/follow/:username", identifyUser , followUserController)

// Route - POST -> /api/users/unfollow/:userId
// Description - Unfollow a user
// Access - Private
userRouter.post("/unfollow/:username", identifyUser , unfollowUserController)

module.exports = userRouter 