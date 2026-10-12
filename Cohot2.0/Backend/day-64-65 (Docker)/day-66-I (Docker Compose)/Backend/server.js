import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"))

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log("running");
});
