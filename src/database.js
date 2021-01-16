import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
}
