const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Names = require("../../models/Names")
const Setup = require("../../models/Setup")
const Stats = require("../../models/Stats")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.get(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    let veri = await Names.findOne({uye:uye.user.id})
    if(!veri) return msg.reply({content:"Üyenin isim geçmişi bulunamadı."})
    msg.reply({embeds:[embed.setColor("RANDOM").setDescription(`${yes} ${uye} üyesi toplamda **${veri.toplam}** kere kaydolmuş. Kaydolduğu isimler aşağıda verilmiştir.\n${veri.isimler.reverse().join("\n")}`)]})
}
exports.mavera = { name: "isimler", ek:["nicknames", "nicks"] }