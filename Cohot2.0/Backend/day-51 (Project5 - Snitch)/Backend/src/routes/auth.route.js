import { Router } from "express";
import {
  registerValidator,
  loginValidator,
} from "../validator/auth.validator.js";
import { loginController, registerController } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerController);
authRouter.post("/login", loginValidator, loginController);

export default authRouter;
