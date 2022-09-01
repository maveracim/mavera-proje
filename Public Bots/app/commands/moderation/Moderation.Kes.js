const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botları sesten atamazsın."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişileri sesten atamazsın."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkilileri sesten atamazsın."})
    if(!uye.voice.channel) return msg.reply({content:"Üye herhangi bir seste bulunmuyor."})
    uye.voice.disconnect(`${msg.author.tag} tarafından istendi.`)
    msg.react(yes)
}
exports.mavera = {
    name:"kes",
    ek:["disconnect"]
}