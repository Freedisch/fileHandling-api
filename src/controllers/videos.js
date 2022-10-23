const express = require("express");
const multer = require("multer");
const {videoSchema} = require("../models/videoModels")
const path = require('path');

const storage = multer.diskStorage({
    destination: "../videos",
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
  upload(req, res, async (err) => {
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

          const Upload = new videoSchema({
            file: req.file
          })
          Upload = await Upload.save();
          res.send({
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          });
        }
      }
})};

exports.streamVideo = async(req, res)=>{
  const video = await videoSchema.findOne({_id: req.params.id})
  if(!video) return res.status(400).send("Video doesn't exist")

  res.send(video)
}

exports.downloadVideo = async(req, res)=>{
  const video = await videoSchema.findOne({_id: req.params.id})
  if(!video) res.status(400).send("Video doesn't exist");

  res.download(video[0].file.path)
}

// exports.downloadVideo = (req, res, next)=>{
//   console.log('The video is been downloaded')
//   const path = req.body.path
//   const file = fs.createReadStream(path)
//   const filename = ()
// }
