import mongoose from "mongoose";

export async function connect() {
  try {
    // Check if the environment variable is present
    if (!process.env.MONGO_URL) {
      throw new Error("MongoDB URL not found in environment variables");
    }

    // Await the mongoose connection
    await mongoose.connect(process.env.MONGO_URL);

    const connection = mongoose.connection;

    // Event listener for successful connection
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    // Event listener for connection errors
    connection.on("error", (err) => {
      console.error("MongoDB connection error: " + err);
      process.exit(1); // Exit process with failure
    });
  } catch (error) {
    console.error("Something went wrong with the database connection: ", error);
    process.exit(1); // Exit process if there's a major error
  }
}
