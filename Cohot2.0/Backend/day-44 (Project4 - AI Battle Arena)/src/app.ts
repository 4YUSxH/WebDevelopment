import express from "express";
import useGraph from "./services/graph.ai.service.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/use-graph", async(req, res) => {
  await useGraph("What is the capital of France")
});

export default app;
