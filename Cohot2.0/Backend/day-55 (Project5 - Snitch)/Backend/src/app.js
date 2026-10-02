import express from "express";
import CookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import cors from 'cors'
import {config} from "./config/config.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import productRouter from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(CookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

app.use("/api/auth", authRouter)
app.use("/api/products", productRouter);

export default app;