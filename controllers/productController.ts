// import { Product } from "../models/Product";
// import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Product } from "../models/Product";
import { StatusCodes } from "http-status-codes";
import { IProduct } from "../types/interfaces";

export const createProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
};

export const getAllProducts = async (_req: Request, res: Response) => {
  const products: IProduct[] = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};
