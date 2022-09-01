const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")
const Setup = require("../../models/Setup")
const Stats = require("../../models/Stats")
const Channel = require("../../models/ChannelStat")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId("renk")
    .setPlaceholder("İstediğiniz bir rengi seçin!")
    .addOptions([
        { label:"", value:"", emoji:"" },
    ]))
    if(msg.member.roles.cache.has(db.reg) || msg.member.permissions.has(8n)) {
        const genelVeri = await Stats.findOne({uye:msg.member.id})
        const kanalVeri = await Channel.find({uye:msg.member.id}).sort({msgChannel:-1})
        const sıralamaVeri = await Stats.find({uye:msg.member.id}).sort({message:-1})
        const top = sıralamaVeri.map((x,y) => `\`${y+1}.\` <@${x.uye}>: **${x.message}** mesaj!`).join("\n")
        msg.reply({embeds:[new MessageEmbed()
            .setDescription(`➥ **Mesaj Verileri:** (Toplam \`${genelVeri.message}\` mesaj)
            ${kanalVeri.splice(0,10).map(x=>`${x.msgChannel?`<#${x.msgChannel}>: \`${x.msgData} mesaj\``:""}`).join("\n")}`)
        .addFields(
            {name:``,value:``,inline:true},
            {name:``,value:``,inline:true},
            {name:``,value:``,inline:true},
        )]})
        
        //
    }
}
exports.mavera = {
    name:"me",
    ek:[]
}