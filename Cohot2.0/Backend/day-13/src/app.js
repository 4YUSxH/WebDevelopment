const express = require("express")
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieParser())

// Hitting that authRouter api that i've created in auth.route.js 
app.use("/api/auth", authRouter)

module.exports = app