import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;