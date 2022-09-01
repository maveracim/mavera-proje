const { MessageActionRow, MessageButton } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed) => {
    const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("mazeretyes").setStyle("SUCCESS").setEmoji(yes),
        new MessageButton().setCustomId("mazeretno").setStyle("DANGER").setEmoji(no))
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.reg) && !msg.member.permissions.has(8n)) return
    const coklu = args.slice(0).join(" ")
    if(!coklu) return msg.reply({content:"Mazeret almak için bir sebep belirt. Sebebini belirttikten sonra kurucuların onayına sunularak mazeretiniz onay/red alacaktır."})
    msg.reply({content:"Mazeretin bildirildi! Kurucular mazeretini değerlendirip kabul/reddedecektir."})
    client.channels.cache.find(x => x.name == "mazeret_log").send({content:`[<@&${db.owner}>]`,embeds:[embed.setDescription(`${msg.member} yetkilisi mazeretli olmak istediğini belirtiyor! Sebebi aşağıda verilmiştir.\n\`\`\`${coklu}\`\`\`\nÜyenin mazeretini kabul/reddetmek için butonlara tıklayın.`)],components:[row]}).then(async mesaj => {
        client.on("interactionCreate", async mavera => {
            if(!mavera.member.roles.cache.has(db.owner) && !mavera.member.permissions.has(8n)) return
            if(mavera.customId == "mazeretyes") {
                await mesaj.edit({content:`${yes} ${msg.member} yetkilisinin mazereti ${mavera.member} tarafından onaylandı! Mazeret sebebi aşağıda verilmiştir.\n\`\`\`${coklu}\`\`\``,components:[],embeds:[]}).catch(() => console.log(","))
                msg.member.roles.add(db.mazeretli)
            }
            if(mavera.customId == "mazeretno") {
                await mesaj.delete().catch(() => console.log("mesj sorun yok"))
                msg.member.send({econtent:`${no} ${msg.member}, **${coklu}** sebebiyle almak istediğiniz mazeret ${mavera.member} tarafından reddedilmiştir.`}).catch(() => console.log(""))
            }
        })
    })
}
exports.mavera = {
    name:"mazeretal",
    ek:["mazeret-al", "mazeretal", "mazeretliol"]
}