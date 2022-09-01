const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""},
    log:{type:Array,default:[]}
})
module.exports = model("rolelog", mavera)