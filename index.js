const Videos = require("./src/routes/videoRoute")
const express = require("express");
const app = express();

app.use(express.json());
app.use("/", Videos)
app.listen(8080);
console.log("Running.....")