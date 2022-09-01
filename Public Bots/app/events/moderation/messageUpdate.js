const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
let client = global.mod
module.exports = async(eski, yeni) => {
    if(eski.author.bot && yeni.author.bot) return
    if(eski.channel.type == "DM" && yeni.channel.type == "DM") return
    if(eski.content == yeni.content) return
    client.channels.cache.find(x => x.name == "message_update_log").send({ embeds:[new MessageEmbed().setFooter({text:base.footer, iconURL:yeni.guild.iconURL({dynamic:true})})
        .addFields({ name:"**__Mesaj Sahibi:__**", value:`${yeni.member} (\`${yeni.member.id}\`)`, inline:true },
        { name:"**__Mesajın Düzenlendiği Kanal:__**", value:`${yeni.channel} (\`${yeni.channel.id}\`)`, inline:true })
        .addField("**__Eski Mesaj:__**", `\`\`\`json
${eski.content}\`\`\``)
        .addField("**__Yeni Mesaj:__**", `\`\`\`json
${yeni.content}\`\`\``)] })
}