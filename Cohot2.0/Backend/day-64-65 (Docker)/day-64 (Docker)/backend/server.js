import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/api/data", (req, res) => {
  const data = {
    id: 1,
    name: "Sample Data",
    description: "This is a sample data object.",
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
