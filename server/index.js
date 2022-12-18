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

app.use("/posts",PostRoutes);




