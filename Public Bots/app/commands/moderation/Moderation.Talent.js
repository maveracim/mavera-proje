const { MessageActionRow, MessageSelectMenu } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == msg.member.id) return msg.reply({content:"Kendine rol veremezsin."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botlara rol veremezsin."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişilere rol veremezsin."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkililere rol veremezsin."})
    const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId("talentroles")
    .setPlaceholder("Bir yetenek seçin!")
    .addOptions([
        { label:"V.I.P.", value:"vip", emoji:"💎" },
        { label:"Sponsor", value:"sponsor", emoji:"💰" },
        { label:"Müzisyen", value:"music", emoji:"🎸" },
        { label:"Ressam", value:"ressam", emoji:"🎨" },
        { label:"Yazılım / Tasarım", value:"developer", emoji:"💻" },
        { label:"Streamer", value:"yayıncı", emoji:"🎥" },
        { label:"Terapist", value:"terapist", emoji:"🎀" },
        { label:"Sorun Çözücü", value:"soruncu", emoji:"🔎" }
    ]))
    msg.reply({content:`Üyeye vermek/almak istediğin yetenek rolünü seç!`,components:[row]}).then(async mesaj => {
        client.on("interactionCreate", async mavera => {
            if(mavera.member.id !== msg.member.id) return
            if(mavera.values == "vip") {
                if(uye.roles.cache.get(db.vip)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.vip}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.vip)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.vip}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.vip)
                }
            }
            if(mavera.values == "sponsor") {
                if(uye.roles.cache.get(db.sponsor)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.sponsor}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.sponsor)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.sponsor}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.sponsor)
                }
            }
            if(mavera.values == "music") {
                if(uye.roles.cache.get(db.musician)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.musician}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.musician)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.musician}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.musician)
                }
            }
            if(mavera.values == "ressam") {
                if(uye.roles.cache.get(db.ressam)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.ressam}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.ressam)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.ressam}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.ressam)
                }
            }
            if(mavera.values == "developer") {
                if(uye.roles.cache.get(db.yazılımcı)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.yazılımcı}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.yazılımcı)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.yazılımcı}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.yazılımcı)
                }
            }
            if(mavera.values == "yayıncı") {
                if(uye.roles.cache.get(db.yayıncı)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.yayıncı}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.yayıncı)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.yayıncı}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.yayıncı)
                }
            }
            if(mavera.values == "terapist") {
                if(uye.roles.cache.get(db.terapist)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.terapist}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.terapist)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.terapist}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.terapist)
                }
            }
            if(mavera.values == "soruncu") {
                if(uye.roles.cache.get(db.cozucu)) {
                    await mesaj.edit({content:`${yes} ${uye} üyesinden <@&${db.cozucu}> rolü alındı.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.remove(db.cozucu)
                } else {
                    await mesaj.edit({content:`${yes} ${uye} üyesine <@&${db.cozucu}> rolü verildi.`,components:[]}).catch(() => console.log("mesaj sorun yok"))
                    uye.roles.add(db.cozucu)
                }
            }
        })
    })
}
exports.mavera = {
    name:"yetenek",
    ek:["talent", "yetenekver", "yetenekal"]
}