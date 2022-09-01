const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""},
    not:{type:Array,default:[]},
    sayi:{type:Number,default:0},
})
module.exports = model("not", mavera)