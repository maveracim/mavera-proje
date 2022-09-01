const Setup = require("../../models/Setup")
exports.run = async(client, msg, args) => {
    let db = await Setup.findOne({ guild:msg.guild.id })
    if(!msg.member.roles.cache.has(db.booster)) return
    let yasaklı = ["aq", "amk", "dc.gg", "dc.gg/", "discord.gg", "oc", "discord.gg/", "https://", "https:", "http:", "oç", "orospu", "orospuçocu", "orospucocugu", "orospuçocuğu"]
    const coklu = args.slice(0).join(" ")
    if(!coklu) return msg.reply({content:"Bir isim belirt. (Maksimum 32 karakter)"})
    if(yasaklı.some(x => coklu.includes(x))) return msg.reply({content:"Yasaklı kelimeleri ismine koyamazsın."})
    msg.member.setNickname(`${db.tag} ${coklu}`)
    .then(() => msg.react(msg.guild.emojis.cache.find(x => x.name == "mavera_yes")))
    .catch(() => msg.reply({content:"İsmin 32 karakterden fazla veya yetkim yetmediği için ismini değiştiremedim."}))

}
exports.mavera = { name: "zengin", ek:["booster","bisim"] }