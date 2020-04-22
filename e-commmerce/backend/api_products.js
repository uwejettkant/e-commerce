import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

mongoose.connect("mongodb://localhost:27017/e-commerce");

const products = mongoose.model("products", {
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
});

router.get("/", (request, response) => {
  products.find().then((data) => {
    response.json(data);
  });
});

router.post("/", (request, response) => {
  products
    .create({
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      categoryId: request.body.categoryId,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

export default router;

//name: request.body.name, description: request.body.description
