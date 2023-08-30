import { Request, Response } from "express";
import path from "path";
import { UploadedFile } from "express-fileupload";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";

export const uploadProductImage = async (req: Request, res: Response) => {
  console.log(req.files);
  if (!req.files) {
    throw new BadRequestError("Error uploading image");
  }
  const productImage = req.files.image as UploadedFile;
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};
