import { Router } from "express";
import {
  registerValidator,
  loginValidator,
} from "../validator/auth.validator.js";
import {
  googeCallbackController,
  loginController,
  registerController,
  getMeController,
} from "../controllers/auth.controller.js";
import passport from "passport";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerController);

authRouter.post("/login", loginValidator, loginController);

// this api is for google login, it will redirect user to google login page and after login it will redirect to google/callback api
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Send auth code to google and google return user's data passport.authenticate is a middleware, it forward control for googleCallbackController after returning user's data
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  googeCallbackController,
);
export default authRouter;

authRouter.get("/me", authenticateUser, getMeController);
