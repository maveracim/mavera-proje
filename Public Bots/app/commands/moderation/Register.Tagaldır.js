const { MessageActionRow, MessageButton } = require("discord.js")
const base = require("../../../settings/settings.json")
const Names = require("../../models/Names")
const Setup = require("../../models/Setup")
const Stats = require("../../models/Stats")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let db = await Setup.findOne({guild:msg.guild.id})
    if(!msg.member.roles.cache.get(db.reg) && !msg.member.permissions.has(8n)) return
    if(!db.tag) return msg.reply({content:"Tag ayarlanmadığı için işlem iptal edildi."})
    if(!uye) return msg.reply({content:"Bir üye belirt."})
    if(uye.user.id == msg.member.id) return msg.reply({content:"Kendine tag aldıramazsın."})
    if(uye.user.id == client.user.id) return msg.reply({content:"Botlara tag aldıramazsın."})
    if(uye.roles.highest.position >= msg.member.roles.highest.position) return msg.reply({content:"Kendinle aynı/üst kişilere tag aldıramazsın."})
    if(uye.permissions.has("ADMINISTRATOR")) return msg.reply({content:"Yetkililere tag aldıramazsın."})
    if(!uye.user.username.includes(db.tag)) return msg.reply({content:`Üyede tag bulunmadığı için işlem iptal edildi. (${db.tag})`})
    let veri = await Names.findOne({uye:uye.user.id})
    if(veri.tagAldı == false) {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("taglıonay").setLabel("Aldırdı!").setStyle("SUCCESS").setEmoji(msg.guild.emojis.cache.find(x => x.name == "mavera_yes")),
            new MessageButton().setCustomId("taglıno").setLabel("Aldırmadı!").setStyle("DANGER").setEmoji(msg.guild.emojis.cache.find(x => x.name == "mavera_no"))
        )
        msg.channel.send({ content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_white")} Selam ${uye}, ${msg.member} yetkilisi size tag aldırdığını iddia ediyor. Kabul ediyor musunuz?`, components:[row] }).then(async mesaj => {
            client.on("interactionCreate", async mavera => {
                if(mavera.member.id !== uye.user.id) return
                if(mavera.customId == "taglıonay") {
                    await mesaj.delete().catch(() => console.log("mesaj silemedim err verme orospu cocu"))
                    await Names.findOneAndUpdate({uye:uye.user.id},{$set:{tagAldı:true}},{upsert:true})
                    await Stats.findOneAndUpdate({uye:msg.member.id},{$inc:{taglı:1,coin:20}},{upsert:true})
                    msg.react(yes)
                    client.channels.cache.find(x => x.name == "tag_aldırdı_log").send({embeds:[embed.setDescription(`${yes} ${msg.member}`)]})
                    uye.roles.add(db.taglı)
                }
                if(mavera.customId == "taglıno") {
                    await mesaj.edit({content:`${no} ${msg.member}, tag aldırdığını iddia ettiğiniz kullanıcı (${uye}) reddetti.`,components:[]})
                }
            })
        })
    } else return msg.reply({content:"Bu kullanıcıya başkası tag aldırmış."})
}
exports.mavera = { name: "tagaldır", ek:["tag-aldır"] }