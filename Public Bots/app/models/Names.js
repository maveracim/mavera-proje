const { Schema, model } = require("mongoose")
const mavera = Schema({
    //guild:{type:String,default:""},
    uye:{type:String,default:""},
    isimler:{type:Array,default:[]},
    toplam:{type:Number,default:0},
    tagAldı:{type:Boolean,default:false}
})
module.exports = model("isimler", mavera)