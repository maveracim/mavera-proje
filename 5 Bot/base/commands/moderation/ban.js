const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/mavera.json")
exports.run = async(client, msg, args, uye) => {
    let sebep =  args.slice(1).join(" ")
    if(msg.member.permissions.has("ADMINISTRATOR") || msg.member.permissions.has("BAN_MEMBERS")) {
        if(!uye) return msg.reply({content:`Bir üye belirt. \`${base.prefix.moderation}ban @Mavera/ID sebep\``})
        if(uye.user.id == msg.member.id) return msg.reply({content:"Kendinizi yasaklayamazsınız."})
        if(uye.user.id == client.user.id) return msg.reply({content:"Botları yasaklayamazsınız."})
        if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkilileri cezalandıramazsın."})
        if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendi yetkinle aynı / üst kişileri cezalandıramazsın."})
        if(uye.user.id == msg.guild.ownerId) return msg.reply({content:"Sunucu sahibini yasaklayamazsın."})
        if(!sebep) return msg.reply({content:`Bir sebep belirt. \`${base.prefix.moderation}ban @Mavera/ID sebep\``})
        await msg.guild.members.ban(uye.id, { reason:sebep }).then(async() => {
            msg.reply({content:`:white_check_mark: ${uye} (${uye.user.id}) üyesi \`${sebep}\` sebebiyle yasaklandı.`})
            client.channels.cache.find(x => x.name == "ban_log").send({embeds:[new MessageEmbed().setFooter({text:base.ready}).setTimestamp()
                .addFields(
                    { name:"**__Yetkili:__**", value:`${msg.author} (${msg.author.id})`, inline:true },
                    { name:"**__Kullanıcı:__**", value:`${uye} (${uye.user.id})`, inline:true },
                    { name:"**__Ceza Türü:__**", value:`\`\`\`diff\n- Ban\`\`\``, inline:true },
                    { name:"**__Ceza Sebebi:__**", value:`\`\`\`diff\n- ${sebep}\`\`\``, inline:true },
                    { name:"**__Ceza Süresi:__**", value:`\`\`\`diff\n- Sınırsız\`\`\``, inline:true },
                )] 
            })
        }).catch(() => msg.reply({content:"Kullanıcıyı yasaklarken bir sorun oluştu!"}))
    } else return
}
exports.mavera = { 
    name: "ban", 
    ek:["yasakla"]
}
