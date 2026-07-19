import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDB from "./src/db/index.js";
const PORT = process.env.PORT || 9000;
connectDB()
.then(()=>{
   app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
   }) 
})
.catch((err)=>{
    console.log("Db not connected",err)
})

