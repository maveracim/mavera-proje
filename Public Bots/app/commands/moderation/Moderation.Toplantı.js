const { MessageActionRow, MessageButton } = require("discord.js")
const base = require("../../../settings/settings.json")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.permissions.has(8n)) return
    let rol = msg.guild.roles.cache.get(db.reg)
    let mazeretli = msg.guild.members.cache.filter(x => x.roles.cache.has(db.mazeretli))
    let olan = rol.members.filter(x => x.voice.channelId == db.toplantı && !x.user.bot)
    let olmayan = rol.members.filter(x => x.presence && !x.voice.channel && !x.user.bot && !x.roles.cache.has(db.mazeretli) || x.presence && x.voice.channelId != db.toplantı && !x.user.bot && !x.roles.cache.has(db.mazeretli))
    let offline = rol.members.filter(x => !x.presence && !x.voice.channel && !x.user.bot && !x.roles.cache.has(db.mazeretli) || !x.presence && !x.user.bot && !x.roles.cache.has(db.mazeretli) && x.voice.channelId !== db.toplantı)
    const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("toplantıdağıt").setLabel("Katıldı/Katılmadı Dağıt!").setStyle("SECONDARY").setDisabled(olan.size+olmayan.size > 0 ? false : true),
        new MessageButton().setCustomId("offlinedağıt").setLabel("Aktif Olmayanlara Dağıt!").setStyle("SECONDARY").setDisabled(offline.size > 0 ? false : true))
    msg.channel.send({embeds:[embed.setDescription(`${mazeretli.size > 0 ? `${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Mazeretli rolünde \`${mazeretli.size}\` kişi bulunuyor. (\`${base.prefixes.moderation}mazeretli @Mavera/ID\`)\n${mazeretli.map(x => x).join("")}`:`${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Mazeretli bulunan yetkili bulunmuyor. (\`${base.prefixes.moderation}mazeretli @Mavera/ID\`)`}
─────────────────────
${olmayan.size > 0 ? `${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Çevrimiçi olup toplantı odasında olmayan \`${olmayan.size}\` kişi bulunuyor.\n${olmayan.map(x => x).join(", ")}`:`${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Çevrimiçi olup toplantı odasında olmayan yetkili bulunmuyor.`}
─────────────────────
${offline.size > 0 ? `${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Çevrimdışı olan ve toplantı odasında olmayan \`${offline.size}\` kişi bulunuyor.\n${offline.map(x => x).join(", ")}` : `${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Çevrimdışı olan ve toplantı odasında olmayan yetkili olan bulunmuyor.`}
─────────────────────
${msg.guild.emojis.cache.find(x => x.name == "mavera_settings")} Toplantı sesinde olan ve olmayan kişilere rollerini dağıtmak için butona tıkla!`)],components:[row]})
    client.on("interactionCreate", async mavera => {
        if(mavera.member.id !== msg.member.id) return
        if(mavera.customId == "toplantıdağıt") {
            olmayan.forEach(x => x.roles.add(db.katılmadı))
            olan.forEach(x => x.roles.add(db.katıldı))
            mavera.reply({content:`**${olmayan.size}** kişiye katılmadı, **${olan.size}** kişiye katıldı rolü veriliyor!`})
        }
        if(mavera.customId == "offlinedağıt") {
            offline.forEach(x => x.roles.add(db.katılmadı))
            mavera.reply({content:`**${offline.size}** kişiye katılmadı rolü veriliyor!`})
        }
    })
}
exports.mavera = {
    name:"toplantı",
    ek:["yoklama"]
}
