const express = require("express")
const multer = require("multer")
const path = require('path');
const Route = express.Router()
const videosController = require("../controllers/videos")


//setup routes
Route.post("/upload", videosController.uploadVideo);
Route.get("/videos/:id", videosController.streamVideo);
Route.get("/download/:id", videosController.downloadVideo);
//exports modules
module.exports = Route;