const { Schema, model } = require("mongoose")
const mavera = Schema({
    // guild
    guild:{type:String,default:""},
    tag:{type:String,default:""},
    taglıAlım:{type:Boolean,default:false},
    // roles
    erkek:{type:Array,default:[]},
    kadın:{type:Array,default:[]},
    unreg:{type:Array,default:[]},
    booster:{type:String,default:""},
    mazeretli:{type:String,default:""},
    taglı:{type:String,default:""},
    katıldı:{type:String,default:""},
    katılmadı:{type:String,default:""},
    yasaklı:{type:String,default:""},
    cezalı:{type:String,default:""},
    supheli:{type:String,default:""},
    // talent roles
    vip:{type:String,default:""},
    sponsor:{type:String,default:""},
    musician:{type:String,default:""},
    ressam:{type:String,default:""},
    yazılımcı:{type:String,default:""},
    yayıncı:{type:String,default:""},
    terapist:{type:String,default:""},
    cozucu:{type:String,default:""},
    // interaction roles
    çekiliş:{type:String,default:""},
    etkinlik:{type:String,default:""},
    ivar:{type:String,default:""},
    iyok:{type:String,default:""},
    // permission roles
    reg:{type:String,default:""},
    cmute:{type:String,default:""},
    vmute:{type:String,default:""},
    jail:{type:String,default:""},
    ban:{type:String,default:""},
    ceo:{type:String,default:""},
    owner:{type:String,default:""},
    // channels
    toplantı:{type:String,default:""},
    welcome:{type:String,default:""},
    rules:{type:String,default:""},
})
module.exports = model("setup", mavera)