import app from "./src/app.js";
import connectToDB from "./src/config/db.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    connectToDB();

    app.listen(3000, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer()