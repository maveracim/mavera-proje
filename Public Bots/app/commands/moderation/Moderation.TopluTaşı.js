const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    let kanal = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[0])
    let taşı = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[1])
    if(!msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has(8n)) return
    if(!kanal) return msg.reply({content:"Taşıyacak ve taşınılacak kanalları belirt. (A kanalından B kanalına)"})
    if(!taşı) return msg.reply({content:"Taşınılacak kanalı belirt."})
    if(kanal.id == taşı.id) return msg.reply({content:"Belirttiğin iki kanal da aynı."})
    kanal.members.map(x => { x.voice.setChannel(taşı.id) })
    msg.reply({content:`**${kanal.members.size}** kişi <#${kanal.id}> kanalından <#${taşı.id}> kanalına taşınıyor.`})
}
exports.mavera = {
    name:"toplutaşı",
    ek:["toplu-taşı"]
}