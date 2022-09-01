const Setup = require("../../models/Setup")
exports.run = async(client, msg, args) => {
    let db = await Setup.findOne({ guild:msg.guild.id })
    if(!db && !db.terapist) return msg.reply({content:"Sunucuda terapist rolü olmadığı için terapi alamazsınız."})
    if(["bilgi", "sistemi", "info"].some(x => x == args[0])) return msg.reply({content:``})
}
exports.mavera = { name: "terapi", ek:["terapial"] }