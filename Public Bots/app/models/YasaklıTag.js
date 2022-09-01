const { Schema, model } = require("mongoose")
const mavera = Schema({
    guild:{type:String,default:""},
    taglar:{type:Array,default:[]},
    etiketler:{type:Array,default:[]}
})
module.exports = model("yasaklıtag", mavera)