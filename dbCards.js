import mongoose from "mongoose";

const cardsSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
});

export default mongoose.model("cards", cardsSchema);
