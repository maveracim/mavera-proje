const { MessageActionRow, MessageButton } = require("discord.js")
const base = require("../../../settings/settings.json")
const Setup = require("../../models/Setup")
const Yasaklı = require("../../models/YasaklıTag")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    let yasaklı = await Yasaklı.findOne({guild:msg.guild.id})
    if(!msg.member.permissions.has(8n)) return
    if(!args[0]) return msg.reply({embeds:[embed.setDescription(`${yasaklı.etiketler.length < 1 ? `${no} Sunucuda yasaklı etiket tagı bulunmuyor. Yasaklı etiket tagı eklemek için \`${base.prefixes.moderation}yetiket ekle <etiket>\` komutunu uygulayın.`:`${no} Tüm yasaklı taglar aşağıda verilmiştir. Yasaklı tag eklemek/çıkarmak için \`${base.prefixes.moderation}yetiket ekle/çıkar <etiket>\` komutunu uygulayın.\n
${yasaklı.etiketler.map(x => `${msg.guild.emojis.cache.find(x => x.name == "mavera_white")} \`${x}\``).join("\n")}`}`)]})
    if(["ekle", "add"].some(x => x == args[0])) {
        if(!args[1]) return msg.reply({content:"Bir etiket tagı belirt."})
        if(args[1] > 9999) return msg.reply({content:"Etiket tagları 9999'dan fazla olamaz."})
        if(yasaklı && yasaklı.etiketler.length && yasaklı.etiketler.includes(args[1])) return msg.reply({content:"Bu tag zaten ekli."})
        await Yasaklı.findOneAndUpdate({guild:msg.guild.id},{$push:{etiketler:args[1]}},{upsert:true})
        let uyeler = msg.guild.members.cache.filter(x => x.user.discriminator.includes(args[1]) && !x.roles.cache.has(db.yasaklı))
        msg.reply({content:`Tag yasaklı olarak eklendi. Toplamda **${uyeler.size}** kişinin sunucuya erişimi kesilecek.`})
        uyeler.forEach(async x => {
            await x.roles.set([db.yasaklı])
            client.channels.cache.find(x => x.name == base.yasaklıName).send({content:`${x}, üzerinde \`${args[1]}\` tagını bulundurduğun için sunucuya erişimin kesildi. Tagı üzerinden çıkartarak tekrar erişim sağlayabilirsin!`})
        })
    }
    if(["çıkar", "sil", "delete", "remove"].some(x => x == args[0])) {
        if(!args[1]) return msg.reply({content:"Bir tag belirt."})
        if(yasaklı && yasaklı.etiketler.length && !yasaklı.etiketler.includes(args[1])) return msg.reply({content:"Bu tag yasaklı olarak bulunmuyor."})
        yasaklı.etiketler = await yasaklı.etiketler.filter(x => x !== args[1])
        await yasaklı.save()
        let uyeler = msg.guild.members.cache.filter(x => x.user.discriminator.includes(args[1]) && x.roles.cache.has(db.yasaklı))
        msg.reply({content:`Tag yasaklı tagdan çıkarıldı. Toplamda **${uyeler.size}** kişi sunucuya erişim sağlayacak.`})
        uyeler.forEach(async x => { await x.roles.set(db.unreg) })
    }
}
exports.mavera = {
    name:"yasaklıetiket",
    ek:["yasaklı-etiket", "yetiket"]
}