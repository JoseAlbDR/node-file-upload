import { Request, Response } from "express";
import path from "path";
import { UploadedFile } from "express-fileupload";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const uploadProductImageLocal = async (req: Request, res: Response) => {
  console.log(req.files);
  if (!req.files) {
    throw new BadRequestError("No File Uploaded");
  }
  const productImage = req.files.image as UploadedFile;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload Image");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new BadRequestError("Please Upload Image Less Than 1MB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

export const uploadProductImage = async (req: Request, res: Response) => {
  if (req.files) {
    const tempImage = req.files.image as UploadedFile;
    const result = await cloudinary.uploader.upload(tempImage.tempFilePath, {
      use_filename: true,
      folder: "file-upload",
    });
    fs.unlinkSync(tempImage.tempFilePath);
    res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
  }
};
