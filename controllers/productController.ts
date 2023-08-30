// import { Product } from "../models/Product";
// import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Product } from "../models/Product";
import { StatusCodes } from "http-status-codes";

export const createProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
};

export const getAllProducts = async (_req: Request, res: Response) => {
  res.send("list of products");
};
