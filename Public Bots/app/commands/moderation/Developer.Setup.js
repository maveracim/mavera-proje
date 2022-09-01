const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Names = require("../../models/Names")
const Setup = require("../../models/Setup")
const Snipe = require("../../models/Snipe")
const YasaklıTag = require("../../models/YasaklıTag")
exports.run = async(client, msg, args, yes, no, embed) => {
    if(!base.developers.includes(msg.author.id)) return
    const arg = args[0]
    let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[1])
    let kanal = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[1])
    let db = await Setup.findOne({ guild:msg.guild.id })
    if(["sw", "guild", "guildID", "guildId"].some(x => x == arg)) {
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ guild:msg.guild.id } }, { upsert:true })
        await Snipe.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ guild:msg.guild.id } }, { upsert:true })
        await YasaklıTag.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ guild:msg.guild.id } }, { upsert:true })
        msg.react(yes)
    }
    if(["tag"].some(x => x == arg)) {
        if(!args[1]) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{tag:args[1]} }, {upsert:true})
        msg.react(yes)
    }
    if(["toplantı"].some(x => x == arg)) {
        if(!kanal) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{toplantı:kanal.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["welcome", "hg", "hoşgeldin", "registerchat", "regchat"].some(x => x == arg)) {
        if(!kanal) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{welcome:kanal.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["rules", "kural", "kurallar"].some(x => x == arg)) {
        if(!kanal) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{rules:kanal.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["çekiliş", "çek"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{çekiliş:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["etkinlik", "etk"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{etkinlik:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["ivar", "ilişkimvar"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ivar:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["iyok", "ilişkimyok"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{iyok:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["erkek", "man"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $push:{erkek:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["kadın", "kız", "woman"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $push:{kadın:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["kayıtsız", "unreg", "unregister"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $push:{unreg:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["booster"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{booster:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["taglı", "family"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{taglı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["vip"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{vip:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["sponsor"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{sponsor:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["müzisyen", "musician"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{musician:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["yazılım", "yazılımcı", "tasarım", "tasarımcı"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{yazılımcı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["yayıncı"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{yayıncı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["terapist"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{terapist:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["sorunçözücü", "çözücü"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{cozucu:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["ressam"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ressam:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["mazeretli"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{mazeretli:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["katıldı"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{katıldı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["katılmadı"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{katılmadı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["yasaklı", "yasaklırol"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{yasaklı:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["register", "registery", "reg"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{reg:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["ceo"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{ceo:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(["owner"].some(x => x == arg)) {
        if(!rol) return msg.react(no)
        await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{owner:rol.id} }, {upsert:true})
        msg.react(yes)
    }
    if(!arg) {
        msg.reply({ embeds:[embed.setDescription(`\`\`\`Sunucu Kurulumu\`\`\`
Guild ID: \`${!db.guild ? `${base.prefixes.moderation}setup guild`:`${db.guild}`}\`
Tag: \`${!db.tag ? `${base.prefixes.moderation}setup tag <tag>`:`${db.tag}`}\`
Toplantı Kanalı: ${!db.toplantı ? `\`${base.prefixes.moderation}setup toplantı #Channel/ID\``:`<#${db.toplantı}>`}
Hoşgeldin Kanalı: ${!db.welcome ? `\`${base.prefixes.moderation}setup welcome #Channel/ID\``:`<#${db.welcome}>`}
Kurallar Kanalı: ${!db.rules ? `\`${base.prefixes.moderation}setup rules #Channel/ID\``:`<#${db.rules}>`}
\`\`\`Rol ve Interaction Rol Kurulumu\`\`\`
Erkek Rol(leri): ${db.erkek.length < 1 ? `\`${base.prefixes.moderation}setup erkek @Role/ID\``:db.erkek.map(x => `<@&${x}>`).join(", ")}
Kadın Rol(leri): ${db.kadın.length < 1  ? `\`${base.prefixes.moderation}setup kadın @Role/ID\``:db.kadın.map(x => `<@&${x}>`).join(", ")}
Kayıtsız Rol(leri): ${db.unreg.length < 1 ? `\`${base.prefixes.moderation}setup kayıtsız @Role/ID\``:db.unreg.map(x => `<@&${x}>`).join(", ")}
Booster: ${!db.booster ? `\`${base.prefixes.moderation}setup booster @Role/ID\``:`<@&${db.booster}>`}
Taglı: ${!db.taglı ? `\`${base.prefixes.moderation}setup taglı @Role/ID\``:`<@&${db.taglı}>`}
Vip: ${!db.vip ? `\`${base.prefixes.moderation}setup vip @Role/ID\``:`<@&${db.vip}>`}
Sponsor: ${!db.sponsor ? `\`${base.prefixes.moderation}setup sponsor @Role/ID\``:`<@&${db.sponsor}>`}
Müzisyen: ${!db.musician ? `\`${base.prefixes.moderation}setup müzisyen @Role/ID\``:`<@&${db.musician}>`}
Yazılım / Tasarım: ${!db.yazılımcı ? `\`${base.prefixes.moderation}setup yazılım @Role/ID\``:`<@&${db.yazılımcı}>`}
Yayıncı: ${!db.yayıncı ? `\`${base.prefixes.moderation}setup yayıncı @Role/ID\``:`<@&${db.yayıncı}>`}
Terapist: ${!db.terapist ? `\`${base.prefixes.moderation}setup terapist @Role/ID\``:`<@&${db.terapist}>`}
Sorun Çözücü: ${!db.cozucu ? `\`${base.prefixes.moderation}setup cozucu @Role/ID\``:`<@&${db.cozucu}>`}
Ressam: ${!db.ressam ? `\`${base.prefixes.moderation}setup ressam @Role/ID\``:`<@&${db.ressam}>`}
Mazeretli: ${!db.mazeretli ? `\`${base.prefixes.moderation}setup mazeretli @Role/ID\``:`<@&${db.mazeretli}>`}
Katıldı: ${!db.katıldı ? `\`${base.prefixes.moderation}setup katıldı @Role/ID\``:`<@&${db.katıldı}>`}
Katılmadı: ${!db.katılmadı ? `\`${base.prefixes.moderation}setup katılmadı @Role/ID\``:`<@&${db.katılmadı}>`}
Çekiliş Katılımcısı: ${!db.çekiliş ? `\`${base.prefixes.moderation}setup çekiliş @Role/ID\``:`<@&${db.çekiliş}>`}
Etkinlik Katılımcısı: ${!db.etkinlik ? `\`${base.prefixes.moderation}setup etkinlik @Role/ID\``:`<@&${db.etkinlik}>`}
İlişkim Var: ${!db.ivar ? `\`${base.prefixes.moderation}setup ivar @Role/ID\``:`<@&${db.ivar}>`}
İlişkim Yok: ${!db.iyok ? `\`${base.prefixes.moderation}setup iyok @Role/ID\``:`<@&${db.iyok}>`}
Yasaklı Tag Rolü: ${!db.yasaklı ? `\`${base.prefixes.moderation}setup yasaklı @Role/ID\``:`<@&${db.yasaklı}>`}
\`\`\`Yetkili Rol Kurulumu\`\`\`
Registery: ${!db.reg ? `\`${base.prefixes.moderation}setup reg @Role/ID\``:`<@&${db.reg}>`}
Chat Mute: ${!db.cmute ? `\`${base.prefixes.moderation}setup cmute @Role/ID\``:`<@&${db.cmute}>`}
Voice Mute: ${!db.vmute ? `\`${base.prefixes.moderation}setup vmute @Role/ID\``:`<@&${db.vmute}>`}
Jail: ${!db.jail ? `\`${base.prefixes.moderation}setup jail @Role/ID\``:`<@&${db.jail}>`}
Ban: ${!db.ban ? `\`${base.prefixes.moderation}setup ban @Role/ID\``:`<@&${db.ban}>`}
Ceo: ${!db.ceo ? `\`${base.prefixes.moderation}setup ceo @Role/ID\``:`<@&${db.ceo}>`}
Owner: ${!db.owner ? `\`${base.prefixes.moderation}setup owner @Role/ID\``:`<@&${db.owner}>`}
`)] })
    }
}
exports.mavera = { name: "setup", ek:[] }
/*
if([""].some(x => x == arg)) {
    if(!rol) return msg.react(no)
    await Setup.findOneAndUpdate({ guild:msg.guild.id }, { $set:{OBJE:rol.id} }, {upsert:true})
    msg.react(yes)
}
*/