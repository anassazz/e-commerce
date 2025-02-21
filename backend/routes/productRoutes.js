import express from "express";

import {
  create,
  deleteProduct,
  getAllProducts,
  getProductById,
  update,
} from "../controller/productController.js";

const route = express.Router();

route.post("/product", create);
route.get("/products", getAllProducts);
route.get("/product/:id", getProductById);
route.put("/update/product/:id", update);
route.delete("/delete/product/:id", deleteProduct);

export default route;
