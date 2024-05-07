const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDb } = require('./configure/db');
const allRoutes = require('./routes/allRoutes')

dotenv.config()
connectDb()
const port = process.env.PORT

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1",allRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to Vigaz ")
})
app.listen(port,()=>{
    console.log("Our Server is running on ",port);
})
