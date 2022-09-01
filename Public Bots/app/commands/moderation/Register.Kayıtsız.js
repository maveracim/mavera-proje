const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Names = require("../../models/Names")
const Setup = require("../../models/Setup")
const Stats = require("../../models/Stats")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.get(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == msg.member.id) return msg.reply({content:"Kendini kayıtsız yapamazsın."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botları kayıtsız yapamazsın."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişileri kayıtsız yapamazsın."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkilileri kayıtsız yapamazsın."})
    await uye.roles.set(db.unreg, `${msg.author.tag} tarafından istendi.`).then(() => {
        msg.react(yes)
    }).catch(() => msg.reply({content:"Üyeyi kayıtsıza atamadım!"}))
}
exports.mavera = { name: "kayıtsız", ek:["unreg", "unregister"] }