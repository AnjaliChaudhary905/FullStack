import express from "express";
import { addFood, deleteFood, editFood, getFoodById, getFoods } from "../controllers/food.controller.js";
import upload from "../middlewares/upload.middleware.js";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";

const foodRoutes = express.Router();

foodRoutes.route("/add").post(verifyToken,isAdmin,upload.single("image"),addFood);
foodRoutes.route("/").get(getFoods);
foodRoutes.route("/:id").get(getFoodById);
foodRoutes.route("/:id").delete(verifyToken,isAdmin,deleteFood);
foodRoutes.route("/:id").put(verifyToken,isAdmin,upload.single('image'),editFood);

export default foodRoutes;