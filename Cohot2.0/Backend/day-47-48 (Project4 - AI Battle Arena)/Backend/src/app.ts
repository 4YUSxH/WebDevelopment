import express from "express";
import useGraph from "./ai/graph.ai.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  }),
);
app.use(morgan("dev"));

app.post("/use-graph", async (req, res) => {
  const result = await useGraph(
    "Swap the 2 variable in js with lowest complexity and it should be short",
  );

  res.send(result);
});

app.post("/invoke", async (req, res) => {
  const { input } = req.body;

  const result = await useGraph(input);

  res.send({"result": result});
});

export default app;
