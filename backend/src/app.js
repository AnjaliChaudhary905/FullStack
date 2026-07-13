import express from "express";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import foodRoutes from "./routes/food.routes.js";
import orderRoutes from "./routes/order.routes.js";
const app = express();


const allowedOrigins = process.env.CORS_ORIGIN.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);
export default app;