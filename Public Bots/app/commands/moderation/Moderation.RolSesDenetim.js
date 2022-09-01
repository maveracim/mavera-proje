const Setup = require("../../models/Setup")
exports.run = async(client, msg, args) => {
    let db = Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has("ADMINISTRATOR")) return
    let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0])
    if(!rol) return msg.reply({content:"Bir rol belirt."})
    let yetkili = rol.members.filter(x => x.presence && x.presence.status != "offline")
    await msg.channel.send({content:`${yetkili.filter(x => !x.voice.channel && !x.user.bot).map(x => x).join(", ")||"Bu rolde aktif olup seste olmayan üye bulunmuyor."}`, code:"md", split:true}).catch(() => msg.channel.send({content:"Bu rolde aktif olup seste olmayan çok fazla üye bulunuyor."}))
}
exports.mavera = { 
    name:"sesdenetim", 
    ek:["ses-denetim", "denetimses", "ses_denetim", "rolsesdenetim", "rsd"]
}