const express = require("express");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    location: "../videos",
    filename: function(req, file, cb){
        cb(null, file.filename + Path2D.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        // Allowed extensions
        const filesExtension = /avi|mp4|mov|avi|mkv/;
        //Check extensions
        const extname = filesExtension.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filesExtension.test(file.mimetype);

        if(mimetype && extname){
            return cb(null,true);
        } else{
            cb('Only vieos are allowed')
        }

    }

}).single("videos")

exports.uploadVideo = (req, res)=>{
    upload(req, res, (err) => {
        if(err){
          res.send({
            msg: err
          });
        } else {
          if(req.file == undefined){
            res.send({
              msg: 'Error: No File Selected!'
            });
          } else {
            res.send({
              msg: 'File Uploaded!',
              file: `uploads/${req.file.filename}`
            });
          }
        }
})};


