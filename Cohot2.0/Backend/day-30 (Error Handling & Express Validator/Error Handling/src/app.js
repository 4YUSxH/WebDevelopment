import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.route.js"
import { errorHandler1, errorHandler2 } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth", authRouter)





// Always use error handling middleware in last  
app.use(errorHandler1)
app.use(errorHandler2)

export default app