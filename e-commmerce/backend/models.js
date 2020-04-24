import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/e-commerce");

export const categories = mongoose.model("categories", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const productSchema = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: Number,
  },
};

export const products = mongoose.model("products", productSchema);

export const shoppingcart = mongoose.model("shoppingcart", {
  productId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  product: productSchema,
});

export const orders = mongoose.model("orders", {
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  customerAdress: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
});
