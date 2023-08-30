import { Request, Response } from "express";
import path from "path";
import { UploadedFile } from "express-fileupload";

export const uploadProductImage = async (req: Request, res: Response) => {
  console.log(req.files);
  if (req.files) {
    const productImage = req.files.productImg as UploadedFile;
    const imagePath = path.join(
      __dirname,
      "../public/uploads/" + `${productImage.name}`
    );
    await productImage.mv(imagePath);
  }
  res.send("upload Product Image");
};
