const express = require("express")
const Route = express.Router()
const videosController = require("../controllers/videos")

//setup routes
Route.post("/upload", videosController.uploadVideo);

//exports modules
module.exports = Route;