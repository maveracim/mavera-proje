const Setup = require("../../models/Setup")
exports.run = async(client, msg, args) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.ceo) && !msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has("ADMINISTRATOR")) return
        if(!args[0] || isNaN(args[0])) return msg.reply({content:"Bir sayı belirt."})
        if(args[0] > 100) return msg.reply({content:"100'den fazla mesaj silemezsin."})
        msg.channel.bulkDelete(args[0]).catch(() => msg.reply({content:"Başarısız: Mesajlar 14 günden sonra veya yetkim yok."}))
}
exports.mavera = {
    name:"sil", 
    ek:["temizle"] 
}