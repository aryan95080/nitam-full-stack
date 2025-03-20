import mongoose from 'mongoose';

const connectDB=async ()=>{
  mongoose.connection.on('connection',()=>{
    console.log("MongoDB Connected...");
  })
  await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

}
export default connectDB;