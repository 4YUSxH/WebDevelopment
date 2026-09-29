import express from "express";
import useGraph from "./ai/graph.ai.js";

const app = express();

app.post("/use-graph", async (req, res) => {
  const result = await useGraph(
    "Swap the 2 variable in js with lowest complexity and it should be short",
  );

  res.send(result);
});

export default app;
