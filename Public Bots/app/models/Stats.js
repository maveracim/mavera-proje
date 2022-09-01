const { Schema, model } = require("mongoose")
const mavera = Schema({
    uye:{type:String,default:""},
    message:{type:Number,default:0},
    voice:{type:Number,default:0},
    dailyMessage:{type:Number,default:0},
    dailyVoice:{type:Number,default:0},
    weekMessage:{type:Number,default:0},
    weekVoice:{type:Number,default:0},
    
    topKayıt:{type:Number,default:0},
    erkek:{type:Number,default:0},
    kadın:{type:Number,default:0},
    taglı:{type:Number,default:0},
    invite:{type:Number,default:0},
    coin:{type:Number,default:0},
})
module.exports = model("stats", mavera)