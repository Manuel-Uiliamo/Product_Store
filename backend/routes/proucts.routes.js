import express from "express";
import { createProducts, getProducts, updateProducts, deleteProducts } from "../controllers/products.controller.js";

const router = express.Router();

// All API Methods

router.get("/", getProducts);

router.post("/", createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router; 