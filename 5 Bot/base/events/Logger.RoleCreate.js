const { MessageEmbed } = require("discord.js")
const base = require("../../settings/mavera.json")
const moment = require("moment")
moment.locale("tr")
let client = global.log
const embed = new MessageEmbed().setColor("GOLD").setFooter({text:base.ready}).setTimestamp()
module.exports = async role => {
    await role.guild.fetchAuditLogs({ type:"ROLE_CREATE" }).then(async audit => {
        let member = audit.entries.first().executor
        if(!member || !audit || Date.now()-audit.createdTimestamp > 60000) return
        client.channels.cache.find(x => x.name == base.logName).send({ content:`${base.systems.everyoneMention == true ? "||@everyone||": ""} ${base.systems.hereMention == true ? "||@here||" : ""}`, embeds:[embed
            .addFields(
                { name:"**__Yapılan İşlem:__**", value:`\`\`\`${base.textColor}\nRol Oluşturmak\`\`\``, },
                { name:"**__İşlem Tarihi:__**" , value:`\`\`\`${base.textColor}\n${moment(role.createdAt).format("DD.MM.YYYY (HH:mm:ss)")}\`\`\`` }
            )
            .addField(`> Kullanıcı Bilgileri`, `\`•\` Kullanıcı Tagı ve ID'si: \`${member.tag}\` (${member.id})
\`•\` Kullanıcı Türü: \`${member.bot == true ? "[BOT]" : "[KULLANICI]"}\`
\`•\` Kullanıcının Bulunduğu En Üst Rol: <@&${role.guild.members.cache.get(member.id).roles.highest.id}>
\`•\` Yönetici Permi: ${role.guild.members.cache.get(member.id).permissions.has("ADMINISTRATOR") == true ? ":white_check_mark:":":x:"}`)
                .addField(`> Rol Bilgileri`, `\`•\` Rol Adı: @${role.name} (${role})
\`•\` Rol ID'si: \`${role.id}\`
\`•\` Rol Reng Kodu: \`${role.hexColor}\`
\`•\` Bu Rolde Bulunan Üye Sayısı: \`${role.members.size}\`
            `)] 
        })
    })
}