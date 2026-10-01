import { Router } from "express";
import {
  registerValidator,
  loginValidator,
} from "../validator/auth.validator.js";
import {
  googeCallbackController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import passport from "passport";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerController);

authRouter.post("/login", loginValidator, loginController);

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  googeCallbackController
);
export default authRouter;
