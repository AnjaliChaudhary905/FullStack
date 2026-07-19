import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDB from "./src/db/index.js";
connectDB()
.then(()=>{
   app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
   }) 
})
.catch((err)=>{
    console.log("Db not connected",err)
})

