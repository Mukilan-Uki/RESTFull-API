import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use("/api/user",userRoute)

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected Successfully");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(`Databse Connection Failed: ${error}`);
});