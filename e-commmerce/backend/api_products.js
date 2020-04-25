import { Router } from "express";
import { products } from "./models";

const router = Router();

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
