const { MessageActionRow, MessageButton } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("cekyes").setLabel("Evet").setStyle("SUCCESS").setEmoji(yes),
        new MessageButton().setCustomId("cekno").setLabel("Hayır").setStyle("DANGER").setEmoji(no)
    )
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(!msg.member.voice.channel) return msg.reply({content:"Bir ses kanalında değilsiniz."})
    if(uye.user.bot) return msg.reply({content:"Botları çekemezsin."})
    if(msg.member.id == uye.user.id) return msg.reply({content:"Kendini çekemezsin."})
    if(!uye.voice.channel) return msg.reply({content:"Üye herhangi bir ses kanalında bulunmuyor."})
    if(msg.member.voice.channel == uye.voice.channel) return msg.reply({content:"Aynı ses kanalındasınız."})
    if(msg.member.roles.cache.has(db.reg) || msg.member.permissions.has("ADMINISTRATOR")) {
        if(uye.roles.highest.position >= msg.member.roles.highest.position) {
            msg.channel.send({content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_white")} ${uye}, ${msg.member} kullanıcısı sizi odasına davet ediyor. Kabul ediyor musunuz?`,components:[row]}).then(async mesaj => {
                client.on("interactionCreate", async mavera => {
                    if(mavera.member.id !== uye.user.id) return
                    if(mavera.customId == "cekyes") {
                        await uye.voice.setChannel(msg.member.voice.channel.id)
                        await mesaj.delete().catch(() => console.log("mesaj np"))
                        await msg.react(yes)
                    }
                    if(mavera.customId == "cekno") {
                        await mesaj.edit(`${no} ${msg.member}, ${uye} kullanıcısını çekme isteğiniz reddedildi.`).catch(() => console.log("mesaj np"))
                    }
                })
            })
        } else {
            await uye.voice.setChannel(msg.member.voice.channel.id)
            await msg.react(yes)
        }
    } else {
        msg.channel.send({content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_white")} ${uye}, ${msg.member} kullanıcısı sizi odasına davet ediyor. Kabul ediyor musunuz?`,components:[soru]}).then(async mesaj => {
            client.on("interactionCreate", async mavera => {
                if(mavera.member.id !== uye.user.id) return
                if(mavera.customId == "çekyes") {
                    await uye.voice.setChannel(msg.member.voice.channel.id)
                    await mesaj.delete().catch(() => console.log("mesaj np"))
                    await msg.react(yes)
                }
                if(mavera.customId == "cekno") {
                    await mesaj.edit(`${no} ${msg.member}, ${uye} kullanıcısını çekme isteğiniz reddedildi.`).catch(() => console.log("mesaj np"))
                }
            })
        })
    }
}
exports.mavera = { 
    name:"çek", 
    ek:["cek"] 
}