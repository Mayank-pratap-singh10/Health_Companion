import mongoose from "mongoose";
import { dbName } from "../constants.js";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
    console.log(`MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("ERROR connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default dbConnection;
