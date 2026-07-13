import express from "express";
import { getUsers, signUpUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { getMe } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.route("/sign-up").post(signUpUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/logout").post(logoutUser);
userRoutes.route("/getme").get(verifyToken,getMe);
userRoutes.route("/").get(verifyToken,isAdmin,getUsers);

export default userRoutes;