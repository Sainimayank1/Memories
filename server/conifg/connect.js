import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();

const connect = () => {
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true}).
        then((response) => {
            if (response) {
                console.log("Succefuuly connected to Database")
            }
        }).
        catch((error)=> {
        console.log(error);
    })
}

export default connect