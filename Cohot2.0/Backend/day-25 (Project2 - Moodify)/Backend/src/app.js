const express = require("express")
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.route")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Routes
app.use("/api/auth", authRouter)

module.exports = app