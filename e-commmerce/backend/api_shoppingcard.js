import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

mongoose.connect("mongodb://localhost:27017/e-commerce");

const shoppingcard = mongoose.model("shoppingcard", {
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

router.get("/", (request, response) => {
  shoppingcard.find().then((data) => {
    response.json(data);
  });
});

router.post("/", (request, response) => {
  shoppingcard
    .create({
      name: request.body.name,
      amount: request.body.amount,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.put("/", (request, response) => {
  shoppingcard
    .create({
      name: request.body.name,
      amount: request.body.amount,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.delete("/:id", (request, response) => {
  shoppingcard
    .findByIdAndDelete(request.params.id)
    .then(() => response.json({ deleted: true }));
});

export default router;
