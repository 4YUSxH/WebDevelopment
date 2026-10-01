import mongoose from "mongoose";
import { config } from "./config.js";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(config.MONGO_URI);
    console.log("DB Connected: " + connect.connection.host);
  } catch (err) {
    throw new Error("DB not connected", err);
  }
};

export default connectToDB;
