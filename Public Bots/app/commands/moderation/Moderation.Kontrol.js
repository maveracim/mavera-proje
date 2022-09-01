const base = require("../../../settings/settings.json")
const { MessageActionRow, MessageButton } = require("discord.js")
const Setup = require("../../models/Setup")
exports.run = async(client, msg, args, yes, no, embed) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.has(db.ownr) && !msg.member.permissions.has("ADMINISTRATOR")) return
        let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0])
        if(!rol) {
            let rolsüz = msg.guild.members.cache.filter(x => x.roles.cache.filter(y => y.id !== msg.guild.id).size == 0 && !x.user.bot)
            let taglı = msg.guild.members.cache.filter(x => !x.user.bot).filter(x => x.user.username.includes(db.tag)).filter(x => !x.roles.cache.has(db.taglı))
            let yt = msg.guild.roles.cache.filter(x => x.permissions.has("ADMINISTRATOR"))
            let guild = msg.guild.roles.cache.filter(x => x.permissions.has("MANAGE_GUILD"))
            let kanal = msg.guild.roles.cache.filter(x => x.permissions.has("MANAGE_CHANNELS"))
            let rol = msg.guild.roles.cache.filter(x => x.permissions.has("MANAGE_ROLES"))
            let emoji = msg.guild.roles.cache.filter(x => x.permissions.has("MANAGE_EMOJIS_AND_STICKERS"))
            let webhook = msg.guild.roles.cache.filter(x => x.permissions.has("MANAGE_WEBHOOKS"))
            let denetim = msg.guild.roles.cache.filter(x => x.permissions.has("VIEW_AUDIT_LOG"))
            const menu = new MessageActionRow().addComponents(
                new MessageButton().setCustomId("tagdağıt").setLabel("Taglı Dağıt!").setStyle("SUCCESS"), 
                new MessageButton().setCustomId("rolsüz").setLabel("Rolsüz Dağıt!").setStyle("PRIMARY"),
                new MessageButton().setCustomId("ytkontrol").setLabel("Yetki Denetim!").setStyle("DANGER"))
                msg.reply({embeds:[embed.setDescription(`${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Tagı olup rolü olmayan kişi sayısı: \`${taglı.size}\`
${msg.guild.emojis.cache.find(x => x.name == "mavera_blue")} Rolü olmayan kişi sayısı: \`${rolsüz.size}\`
> Yetki denetim ile de hangi rolde hangi yetki olduğunu öğrenebilirsiniz. Detaylı yetki denetimi için \`${base.prefixes.moderation}kontrol @Rol/ID\` komutunu uygulayın.`).setColor("GOLD")],components:[menu]}).then(async mesaj => {
    client.on("interactionCreate", async mavera => {
        if(mavera.member.id !== msg.member.id) return
        if(mavera.customId == "tagdağıt") {
            taglı.forEach(async x => x.roles.add(db.taglı))
            mavera.reply({content:`• Tagı olup rolü olmayan \`${taglı.size}\` kişiye <@&${db.taglı}> rolü veriliyor.`, ephemeral:true})
        }
        if(mavera.customId == "rolsüz") {
            rolsüz.forEach(async x => x.roles.add(db.unreg))
            mavera.reply({content:`• Rolü olmayan \`${rolsüz.size}\` kişiye <@&${db.unreg}> rolü veriliyor.`,ephemeral:true})
        }
        if(mavera.customId == "ytkontrol") {
            await mavera.reply({embeds:[embed.setDescription(`• Yönetici Permi: \`${yt.size}\`\n• Sunucu Yönetme: \`${guild.size}\`\n• Rol Yönetme: \`${rol.size}\`\n• Kanal Yönetme: \`${kanal.size}\`\n• Emoji Yönetme: \`${emoji.size}\`\n• Webhook Yönetme: \`${webhook.size}\`\n• Denetim Yetkisi: \`${denetim.size}\`\n
\`Yönetici:\` ${yt.map(x => `<@&${x.id}>`)||":x:"}
\`Sunucu Yönetme:\` ${guild.map(x => `<@&${x.id}>`)||":x:"}
\`Rol Yönetme:\` ${rol.map(x => `<@&${x.id}>`)||":x:"}
\`Kanal Yönetme:\` ${kanal.map(x => `<@&${x.id}>`)||":x:"}
\`Emoji Yönetme:\` ${emoji.map(x => `<@&${x.id}>`)||":x:"}
\`Webhook Yönetme:\` ${webhook.map(x => `<@&${x.id}>`)||":x:"}
\`Denetim Görüntüleme:\` ${denetim.map(x => `<@&${x.id}>`)||":x:"}`)],ephemeral:true})
        }
    })
})
        } else {
            const menu2 = new MessageActionRow().addComponents(new MessageButton().setCustomId("rolüyegör").setLabel("Bu roldeki üyeleri görüntüle.").setStyle("PRIMARY"))
                msg.reply({embeds:[embed.setDescription(`• Rol bilgileri: <@&${rol.id}> - ${rol.name} (${rol.id})
• Bu rolde \`${rol.members.size}\` kişi bulunuyor.
• Yönetici yetkisi: ${rol.permissions.has("ADMINISTRATOR") ? yes : no}
• Sunucu yönetme yetkisi: ${rol.permissions.has("MANAGE_GUILD") ? yes : no}
• Rol yönetme yetkisi: ${rol.permissions.has("MANAGE_ROLES") ? yes : no}
• Kanal yönetme yetkisi: ${rol.permissions.has("MANAGE_CHANNELS") ? yes : no}
• Webhook yönetme yetkisi: ${rol.permissions.has("MANAGE_WEBHOOKS") ? yes : no}
• Emoji yönetme yetkisi: ${rol.permissions.has("MANAGE_EMOJIS_AND_STICKERS") ? yes : no}
• Denetim görme yetkisi: ${rol.permissions.has("VIEW_AUDIT_LOG") ? yes : no}`)],components:[menu2]}).then(async maverawashere => {
    client.on("interactionCreate", async mavera => {
        if(mavera.member.id !== msg.member.id) return
        if(mavera.customId == "rolüyegör") {
            mavera.reply({content:`${rol.members.map(x => `<@${x.id}>`).join(", ")}`,ephemeral:true}).catch(() => mavera.reply({content:"Bu rolde fazla üye bulunduğundan dolayı görüntüleyemedim.",ephemeral:true}))
        }
    })
})
        }
}
exports.mavera = { 
    name:"kontrol", 
    ek:["rolsüz"]
}