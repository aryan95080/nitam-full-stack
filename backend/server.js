import express from 'express'
import  cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

//app canfig

const app=express();
const port=process.env.PORT || 4000
connectDB();
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//appi endpoints

app.get('/',(req,res)=>{
  res.send("API WORKING")
})

//start to express server

app.listen(port,()=>console.log('Server listening on port '+port))