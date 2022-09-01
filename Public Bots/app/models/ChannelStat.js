const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""},
    msgChannel:{type:String,default:""},
    msgData:{type:Number,default:0},
})
module.exports = model("channel_stat", mavera)
