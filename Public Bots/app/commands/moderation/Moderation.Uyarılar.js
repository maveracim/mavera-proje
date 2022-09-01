const Setup = require("../../models/Setup")
const Uyarı = require("../../models/Uyarı")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:`Bir üye belirt.`})
    let veri = await Uyarı.findOne({uye:uye.user.id})
    if(!veri.uyari) return msg.reply({content:"Üye daha önce uyarı almamış."})
    msg.reply({embeds:[embed.setDescription(`${no} ${uye} kullanıcısı toplamda **${veri.uyari}** kez uyarı almış. Aldığı uyarılar aşağıda verilmiştir.\n\n${veri.sebep.map((x,y) => `\`${y+1}.\` ${x}`).join("\n")}`)]})
}
exports.mavera = {
    name:"uyarılar",
    ek:["warns", "warnings", "uyarıları"]
}