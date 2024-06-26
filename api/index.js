import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to MongoDB");
})

const app = express();

app.listen(3000 , () =>{
    console.log("Server is listening on port 3000")
});

app.use('./api/user',userRouter);
app.use('./api/auth',authRouter);