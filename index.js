import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT
app.get('/health',(req,res)=>{
    res.json({
        success:true,
        message:"this is health api"
    })
})

app.listen(PORT,()=>{
    console.log('server is on ')
})