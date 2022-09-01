const Setup = require("../../models/Setup")
const Uyarı = require("../../models/Uyarı")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.ceo) && !msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has(8n)) return
    const coklu = args.slice(1).join(" ")
    if(!uye) return msg.reply({content:`Bir üye ve sebep belirt.`})
    if(!coklu) return msg.reply({content:`Uyarı sebebini belirt.`})
    await Uyarı.findOneAndUpdate({uye:uye.user.id},{$push:{sebep:`\`${coklu}\` (<@${msg.member.id}>)`},$inc:{uyari:1}},{upsert:true})
    msg.reply({content:`${msg.member}, ${uye.user.tag} üyesini \`${coklu}\` sebebi ile uyardınız.`})
}
exports.mavera = {
    name:"uyar",
    ek:["uyarı", "warn", "warning"]
}