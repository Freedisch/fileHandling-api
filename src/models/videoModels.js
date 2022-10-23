const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    file:{
        type: Object,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("videoSchema", videoSchema)