const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    msg.reply({embeds:[embed.setDescription(`• Sunucuda **${msg.guild.memberCount}** üye bulunuyor.
• Son 1 saatte ${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}** üye sunucuya giriş yapmış.
• Son 1 günde ${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}** üye sunucuya giriş yapmış.
• Son 1 haftada ${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}** üye sunucuya giriş yapmış.
• Son 1 ayda ${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}** üye sunucuya giriş yapmış.
• Son 1 yılda ${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000*12).size}** üye sunucuya giriş yapmış.`) ]})
}
exports.mavera = {
    name:"sunucubilgi",
    ek:["sunucu-bilgi", "istatistik", "guildstat", "sunucustat", "sunucugiriş"]
}