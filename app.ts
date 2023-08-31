import "express-async-errors";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import express from "express";
import connectDB from "./db/connect";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import productRouter from "./routes/productRoutes";
const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload());
app.get("/", (_req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

app.use("/api/v1/products", productRouter);
// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

void start();
