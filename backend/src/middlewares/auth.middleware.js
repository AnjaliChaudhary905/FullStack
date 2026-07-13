import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import { success } from "../controllers/order.controller.js";
export const verifyToken = async (req, res, next) => {
   const token = req.cookies?.token;

    if (!token) {
        return res.status(400).json({
            message: "token not provided",
            success: false,
        })
    }
   try {
     const decoded =await jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user=await userModel.findById(decoded.id);
    req.user=user;
    next();
   } catch (error) {
    res.status(400).json({
        message:"invalid token",
        success:false,
    });
   }
};

export const isAdmin=(req,res,next)=>{
const user = req.user;
if(user.role!=='admin'){
    return res.status(403).json({
        message:"admin only",
        success:false
    })
}
next();
}