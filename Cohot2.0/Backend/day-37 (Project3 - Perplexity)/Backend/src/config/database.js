import mongoose from "mongoose";
import { config } from "dotenv";

config()

const connectToDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

export default connectToDB;
