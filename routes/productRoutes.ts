import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";
import { uploadProductImage } from "../controllers/uploadsController";

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage);

export default router;
