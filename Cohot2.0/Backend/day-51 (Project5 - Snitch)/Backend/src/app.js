import express from "express";
import CookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(CookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRouter)

export default app;