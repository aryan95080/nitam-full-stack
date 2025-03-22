import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'



//app configuration
const app = express();
const port = process.env.PORT || 4000

//db connection
connectDB()


//middleware

app.use(express.json());
app.use(cors());

//api endpoint

app.get('/', (req, res) => {
  res.send('API Working')
})

//listen to the server
app.listen(port,()=>console.log('API server listening on port :'+port));