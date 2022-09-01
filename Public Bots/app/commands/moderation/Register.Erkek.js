const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Names = require("../../models/Names")
const Setup = require("../../models/Setup")
const Stats = require("../../models/Stats")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    const nick = args[1]
    const age = args[2]
    if(!msg.member.roles.cache.get(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == msg.member.id) return msg.reply({content:"Kendini kaydedemezsin."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botları kaydedemezsin."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişileri kaydedemezsin."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkilileri kaydedemezsin."})
    if(!nick) return msg.reply({content:`Bir isim ve yaş belirt. \`${base.prefixes.moderation}erkek @Mavera/ID isim yaş\``})
    if(!age || isNaN(age)) return msg.reply({content:`Bir yaş belirt. \`${base.prefixes.moderation}erkek @Mavera/ID isim yaş\``})
    await uye.setNickname(`${db.tag} ${nick} | ${age}`).then(async() => {
        await uye.roles.set(db.erkek)
        await Stats.findOneAndUpdate({ uye:msg.member.id },{$inc:{topKayıt:1,erkek:1,coin:5}},{upsert:true})
        let isimler = await Names.findOne({uye:uye.user.id})
        if(!isimler) { await msg.react(yes) } else {
            await msg.reply({embeds:[embed.setDescription(`${uye} üyesi "${uye.displayName}" olarak kaydedildi.\n\n${yes} Kullanıcı toplamda **${isimler.toplam}** kere kaydolmuş. Kaydolduğu isimler aşağıda verilmiştir.
${isimler.isimler.reverse().join("\n")}`)]})
        }
        await Names.findOneAndUpdate({ uye:uye.user.id }, { $push:{ isimler:`\`${db.tag} ${nick} | ${age}\` (${db.erkek.map(x => `<@&${x}>`).join(", ")})` }, $inc:{ toplam:1 } }, { upsert:true })
    })
}
exports.mavera = { name: "erkek", ek:["e", "man"] }