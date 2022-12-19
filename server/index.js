import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import PostRoutes from './routes/posts.js'
import * as dotenv from 'dotenv'
import connect from './conifg/connect.js'
dotenv.config()

connect();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}))
app.use("/posts",PostRoutes);
app.get('/',(req,res)=>
{
    res.status(200).json({msg:"YEs"})
})

app.listen(port, () => {
    console.log("App listining on :" + port);
})





