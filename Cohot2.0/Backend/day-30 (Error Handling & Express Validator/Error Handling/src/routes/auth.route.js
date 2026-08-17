import { Router } from "express";
import { registerUser1, registerUser2 } from "../controllers/auth.controller.js";
import { errorHandler1, errorHandler2 } from "../middlewares/error.middleware.js";

const authRouter = Router()

authRouter.post("/register1", registerUser1)
authRouter.post("/register2", errorHandler2, registerUser2)

// authRouter.post("/register2", errorHandler2, registerUser2)
// We dont need to write like this

export default authRouter