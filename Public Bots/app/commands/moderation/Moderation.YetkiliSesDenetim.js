const Setup = require("../../models/Setup")
exports.run = async(client, msg, args) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has("ADMINISTRATOR")) return
    if(!db.reg && !db.reg.length) return msg.reply({content:"Yetkili rolü kurulmamış."})
    let rol = msg.guild.roles.cache.get(db.reg)
    let yetkili = rol.members.filter(x => x.presence && x.presence.status != "offline" && !x.voice.channel)
    await msg.channel.send({content:`${yetkili.filter(x => !x.voice.channel && !x.user.bot).map(x => x).join(", ")||"Bu rolde aktif olup seste olmayan üye bulunmuyor."}`, code:"md", split:true}).catch(() => msg.channel.send({content:"Bu rolde aktif olup seste olmayan çok fazla üye bulunuyor."}))
}
exports.mavera = { 
    name:"ysay",
    ek:["yetkili-say", "yetkilisay"]
}