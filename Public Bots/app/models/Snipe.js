const { Schema, model } = require("mongoose")
const mavera = Schema({
    guild:{type:String,default:""},
    kanal:{type:String,default:""},
    mesaj:{type:String,default:""},
    uye:{type:String,default:""},
    tarih:{type:Date,default:""}
})
module.exports = model("snipe", mavera)