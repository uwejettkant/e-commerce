import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

mongoose.connect("mongodb://localhost:27017/e-commerce");

const categories = mongoose.model("categories", {
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

router.get("/", (request, response) => {
  categories.find().then((data) => {
    response.json(data);
  });
});

router.post("/add", (request, response) => {
  categories
    .create({
      name: request.body.name,
      description: request.body.description,
      id: request.body.id,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

export default router;

//name: request.body.name, description: request.body.description
