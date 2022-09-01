const { MessageEmbed } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    msg.channel.send({embeds:[new MessageEmbed().setDescription(`\`•\` Sunucumuzda toplam **${msg.guild.memberCount}** kişi bulunuyor. (**${msg.guild.members.cache.filter(x => x.presence.status != "offline").size}** aktif)
\`•\` Sesli kanallarda **${msg.guild.members.cache.filter(x => x.voice.channel).size||0}** kişi bulunuyor.
\`•\` Sunucumuzda toplam **${msg.guild.members.cache.filter(async x => x.user.username.includes(db.tag)).size}** kişi tagımızda bulunuyor.
\`•\` Sunucumuz **${msg.guild.premiumSubscriptionCount}** takviyeye sahip. (**${msg.guild.premiumTier.replace("NONE", "0").replace("TIER_1", "1").replace("TIER_2", "2").replace("TIER_3", "3")}.** seviye)`)]})
}
exports.mavera = {
    name:"say",
    ek:[]
}