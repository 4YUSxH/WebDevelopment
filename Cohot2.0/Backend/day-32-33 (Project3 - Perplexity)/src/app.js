import express from "express"
import cookieParser from "cookie-parser"
import morgan from 'morgan'
import authRouter from "./routes/auth.route.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

export default app