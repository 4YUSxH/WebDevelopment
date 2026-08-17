import { Router } from "express";
import { registerUser3 } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register3", registerValidator , registerUser3);

export default authRouter;