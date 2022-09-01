const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""},
    uyari:{type:Number,default:0},
    sebep:{type:Array,default:[]},
})
module.exports = model("uyari", mavera)