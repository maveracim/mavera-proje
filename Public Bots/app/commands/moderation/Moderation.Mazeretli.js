const { MessageActionRow, MessageButton } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId("mazeretyes").setStyle("SUCCESS").setEmoji(yes),
        new MessageButton().setCustomId("mazeretno").setStyle("DANGER").setEmoji(no))
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.owner) && !msg.member.permissions.has(8n)) return
    if(!uye) return msg.reply({content:"Bir üye belirt!"})
    if(uye.user.id == msg.member.id) return msg.reply({content:"Kendini mazeretli sayamazsın."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botları mazeretli sayamazsın."})
    if(!uye.roles.cache.has(db.reg)) return msg.reply({content:"Üye yetkili olmadığı için işlem iptal edildi."})
    const coklu = args.slice(1).join(" ")
    if(!coklu) return msg.reply({content:"Mazeretli yapmak için bir sebep belirt."})
    uye.roles.add(db.mazeretli)
    client.channels.cache.find(x => x.name == "mazeret_log").send({content:`[${db.owner}]`,embeds:[embed.setDescription(`${msg.member} yetkilisi ${uye} yetkilisini mazeretli olarak bildirdi! Sebebi aşağıda verilmiştir.\n\`\`\`${coklu}\`\`\`\n`)] })
}
exports.mavera = {
    name:"mazeretli",
    ek:["mazeretliyap"]
}