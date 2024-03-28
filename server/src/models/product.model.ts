import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: String,
    brand: {
      type: {
        name: String,
        logo_url: String,
      },
      required: true,
    },
  },
  {
    versionKey: false,
  }
);


export default mongoose.model("products", productSchema);
