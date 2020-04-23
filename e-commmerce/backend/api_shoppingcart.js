import { Router } from "express";
import mongoose from "mongoose";
import { shoppingcart } from "./models";
import { products } from "./models";

const router = Router();

mongoose.connect("mongodb://localhost:27017/e-commerce");

router.get("/", (request, response) => {
  shoppingcart.find().then((data) => {
    response.json(data);
  });
});

router.post("/:id", (request, response) => {
  products
    .findById(request.params.id)
    .then(() => {
      shoppingcart.create({
        productId: request.params.id,
        amount: request.body.amount,
      });
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.patch("/:id", (request, response) => {
  shoppingcart
    .findByIdAndUpdate(request.params.id, {
      amount: request.body.amount,
    })
    .then(() => response.json({ updated: true }));
});

router.delete("/:id", (request, response) => {
  shoppingcart
    .findByIdAndDelete(request.params.id)
    .then(() => response.json({ deleted: true }));
});

export default router;
