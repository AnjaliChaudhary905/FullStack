import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (path) => {
 try {
       const res = await cloudinary.uploader.upload(path, {
        resource_type: "auto",
    })
   
    return res;
 } catch (error) {
    console.log("failed to upload on cloudinary",error)
 }
};

export default uploadOnCloudinary;
