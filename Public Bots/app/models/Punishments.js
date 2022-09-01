const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""}
})
module.exports = model("cezalar", mavera)