const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

// Require routes
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.routes")

const app = express()

app.use(express.json())
app.use(cookieParser()) 
app.use(cors({
    credentials: true, 
    origin: "http://localhost:5173"
}));
app.use(morgan("dev"))

// Using routes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

module.exports = app