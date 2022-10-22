const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'videos')
    },
    filename: (req, file, cb)=>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.set("view engine", "ejs");

app.get("/upload", (req, res)=>{
    res.render("upload")
})

app.post("/upload", upload.single('videos'), (req, res)=>{
    res.send("Images uploaded")
})

app.get("/upload/:video", (req, res)=>{

});

app.listen(8080);
console.log("Running.....")