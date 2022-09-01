const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    let kanal = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[1])
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botları taşıyamazsın."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişileri taşıyamazsın."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkilileri taşıyamazsın."})
    if(!uye.voice.channel) return msg.reply({content:"Üye herhangi bir seste bulunmuyor."})
    if(!kanal) return msg.reply({content:"Bir kanal belirt."})
    if(uye.voice.channelId == kanal.id) return msg.reply({content:"Taşımak istediğin kanal kendisinin bulunduğu kanalla aynı."})
    uye.voice.setChannel(kanal.id)
    msg.react(yes)
}
exports.mavera = {
    name:"taşı",
    ek:["transport"]
}