const moment = require("moment")
const Setup = require("../../models/Setup")
const Snipe = require("../../models/Snipe")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    let snipe = await Snipe.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    if(!snipe.kanal) { 
        msg.reply({content:"Bu kanalda silinen mesaj bulunamadı."})
    } else {
        if(snipe.kanal == msg.channel.id) {
            msg.reply({content:`<@${snipe.uye}> tarafından **${snipe.mesaj}** mesajı silindi. \`[${moment(snipe.tarih).locale("tr").format("LLL")}]\``}).then(x => setTimeout(() => { x.delete() && msg.delete() }, 5000))
        } else {
            msg.reply({content:"Bu kanalda silinen mesaj bulunamadı."})
        }
    }
}
exports.mavera = {
    name:"snipe",
    ek:[]
}