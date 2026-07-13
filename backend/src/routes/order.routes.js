import express from "express";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";
import { createOrder, getOrder, getOrders, success } from "../controllers/order.controller.js";

const orderRoutes = express.Router();

orderRoutes.route('/create').post(verifyToken, createOrder)
orderRoutes.route('/success').get(success);
orderRoutes.route("/").get(verifyToken,isAdmin,getOrders);
orderRoutes.route('/:id').get(getOrder);


export default orderRoutes;
