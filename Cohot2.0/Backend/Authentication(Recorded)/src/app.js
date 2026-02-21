const express = require('express')
const authRoute = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())

app.use("/api/auth", authRoute)

app.use(cookieParser)

module.exports = app