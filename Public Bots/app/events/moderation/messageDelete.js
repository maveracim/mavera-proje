const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Snipe = require("../../models/Snipe")
let client = global.mod
module.exports = async msg => {
    if(msg.author.bot) return
    if(msg.channel.type == "DM") return
    await Snipe.findOneAndUpdate({guild:msg.guild.id,kanal:msg.channel.id},{$set:{mesaj:msg.content,tarih:new Date(),uye:msg.member.id}})
    if(!msg.attachments.first()) {
        client.channels.cache.find(x => x.name == "message_delete_log").send({ embeds:[new MessageEmbed().setFooter({text:base.footer, iconURL:msg.guild.iconURL({dynamic:true})})
            .addFields({ name:"**__Mesaj Sahibi:__**", value:`${msg.member} (\`${msg.member.id}\`)`, inline:true },
            { name:"**__Mesajın Silindiği Kanal:__**", value:`${msg.channel} (\`${msg.channel.id}\`)`, inline:true })
            .addField("**__Mesaj İçeriği:__**", `\`\`\`json
${msg.content}\`\`\``)] })
    } else {
        client.channels.cache.find(x => x.name == "message_delete_log").send({ embeds:[new MessageEmbed().setFooter({text:base.footer, iconURL:msg.guild.iconURL({dynamic:true})})
            .addFields({ name:"**__Fotoğraf Sahibi:__**", value:`${msg.member} (\`${msg.member.id}\`)`, inline:true },
            { name:"**__Fotoğrafın Silindiği Kanal:__**", value:`${msg.channel} (\`${msg.channel.id}\`)`, inline:true })
            .addField("**__Fotoğraf Link(leri):__**", `\`\`\`${msg.attachments.map(x => x.proxyURL).join("\n")}\`\`\``)] })
    }
}