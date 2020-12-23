import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://coco:prLSIXCerWHYksYT@cluster0.0otdg.mongodb.net/graphql?retryWrites=true&w=majority",
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
