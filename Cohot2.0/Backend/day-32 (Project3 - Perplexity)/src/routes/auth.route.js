import {Router} from 'express'
import { registerController } from '../controllers/auth.controller.js'
import { registerValidator } from '../validators/auth.validator.js'

const authRouter = Router()

authRouter.post("/register", registerValidator, registerController)

export default authRouter