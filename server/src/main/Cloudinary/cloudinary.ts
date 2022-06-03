//import { v2 as cloudinary } from "cloudinary";
const cloudinary = require("cloudinary").v2;
import dotenv from "dotenv";
dotenv.config();
const { CloudinaryStorage } = require("multer-storage-cloudinary");
//import multer from "multer";
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Pupa-ecommerce",
  },
});

export const upload = multer({ storage: storage });
