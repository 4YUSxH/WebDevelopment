import { Router } from "express";
import {
  registerValidator,
  loginValidator,
} from "../validator/auth.validator.js";
import { registerController } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerController);

export default authRouter;
