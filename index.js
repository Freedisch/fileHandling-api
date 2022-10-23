require('dotenv').config()
const Videos = require("./src/routes/videoRoute")
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true})
.then(()=>console.log('connected')).catch(err=>console.log('error ocured',err));


app.use(express.json());
app.use("/", Videos)
app.listen(8080);
console.log("Running.....")