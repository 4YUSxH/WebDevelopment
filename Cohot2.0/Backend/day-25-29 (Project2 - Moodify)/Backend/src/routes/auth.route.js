const {Router} = require("express")
const { registerController, loginController, getMeController, logoutController } = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")

const authRouter = Router()

authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.get("/get-me", identifyUser , getMeController)
authRouter.post("/logout", logoutController)

module.exports = authRouter