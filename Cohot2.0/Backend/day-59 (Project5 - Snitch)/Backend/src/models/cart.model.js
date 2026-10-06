import mongoose from "mongoose";
import priceSchema from "./price.schema.js";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product.variants",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: priceSchema,
        required: true,
      },
    },
  ],
});

const cardModel = mongoose.model("cart", cartSchema);

export default cardModel;
