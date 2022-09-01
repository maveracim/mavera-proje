const { MessageActionRow, MessageButton } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    const aç = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("talımaç").setLabel("Taglı Alımı Aç!").setStyle("SUCCESS"),
        new MessageButton().setCustomId("talımsil").setLabel("İptal!").setStyle("DANGER"),)
    const kapat = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("talımkapat").setLabel("Taglı Alımı Kapat!").setStyle("PRIMARY"),
        new MessageButton().setCustomId("talımsil1").setLabel("İptal!").setStyle("DANGER"))
    if(!msg.member.permissions.has(8n)) return
    if(db.taglıAlım == false) {
        msg.reply({content:`${no} Taglı alım şu anda kapalı. Açmak için butona tıklayın.`,components:[aç]}).then(async mesaj => {
            client.on("interactionCreate", async mavera => {
                if(mavera.member.id !== msg.member.id) return
                if(mavera.customId == "talımaç") {
                    db.taglıAlım = true, await db.save(), mesaj.edit({content:`${yes} Taglı alım açıldı. Kapatmak için butona tıklayın.`,components:[kapat]}).catch(()=>console.log("nolcakaq"))
                }
                if(mavera.customId == "talımkapat") {
                    db.taglıAlım = false, await db.save(), mesaj.edit({content:`${no} Taglı alım kapatıldı. Açmak için butona tıklayın.`,components:[aç]}).catch(()=>console.log("nolcakaq"))
                }
                if(mavera.customId == "talımsil") {
                    await mesaj.delete().catch(() => console.log("q"))
                    await msg.delete().catch(() => console.log("w"))
                }
                if(mavera.customId == "talımsil1") {
                    await mesaj.delete().catch(() => console.log("q"))
                    await msg.delete().catch(() => console.log("w"))
                }
            })
        })
    } else if(db.taglıAlım == true) {
        msg.reply({content:`${yes} Taglı alım açık. Kapatmak için butona tıklayın.`,components:[kapat]}).then(async mesaj => {
            client.on("interactionCreate", async mavera => {
                if(mavera.member.id !== msg.member.id) return
                if(mavera.customId == "talımaç") {
                    db.taglıAlım = true, await db.save(), mesaj.edit({content:`${yes} Taglı alım açıldı. Kapatmak için butona tıklayın.`,components:[kapat]}).catch(()=>console.log("nolcakaq"))
                }
                if(mavera.customId == "talımkapat") {
                    db.taglıAlım = false, await db.save(), mesaj.edit({content:`${no} Taglı alım kapatıldı. Açmak için butona tıklayın.`,components:[aç]}).catch(()=>console.log("nolcakaq"))
                }
                if(mavera.customId == "talımsil") {
                    await mesaj.delete().catch(() => console.log("q"))
                    await msg.delete().catch(() => console.log("w"))
                }
                if(mavera.customId == "talımsil1") {
                    await mesaj.delete().catch(() => console.log("q"))
                    await msg.delete().catch(() => console.log("w"))
                }
            })
        })
    }
}
exports.mavera = {
    name:"taglıalım",
    ek:["talım"]
}