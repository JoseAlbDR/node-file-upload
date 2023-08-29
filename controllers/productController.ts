// import { Product } from "../models/Product";
// import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

export const createProduct = async (_req: Request, res: Response) => {
  res.send("create product");
};

export const getAllProducts = async (_req: Request, res: Response) => {
  res.send("list of products");
};
