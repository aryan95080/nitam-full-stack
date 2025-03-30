import express from 'express'
import  cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cardRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//app canfig

const app=express();
const port=process.env.PORT || 4000
connectDB();
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//appi endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cardRouter)
app.use('/api/order',orderRouter)




app.get('/',(req,res)=>{
  res.send("API WORKING")
})

//start to express server

app.listen(port,()=>console.log('Server listening on port '+port))