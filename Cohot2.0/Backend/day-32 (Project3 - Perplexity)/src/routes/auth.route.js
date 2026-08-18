import {Router} from 'express'
import { getMeController, loginController, registerController, verifyEmailController } from '../controllers/auth.controller.js'
import { loginValidator, registerValidator } from '../validators/auth.validator.js'
import { identifyUser } from '../middlewares/auth.middleware.js'

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", registerValidator, registerController)

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 * @body { email, password }
 */
authRouter.post("/login", loginValidator, loginController)

/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged-in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, getMeController)

/**
 * @route GET /api/auth/verify-email
 * @desc Verify a user's email address
 * @access Public
 * @query { token }
 */
authRouter.get("/verify-email", verifyEmailController)

export default authRouter