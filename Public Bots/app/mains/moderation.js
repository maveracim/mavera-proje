const { Client, MessageSelectMenu, MessageEmbed } = require("discord.js")
const mongoose = require("mongoose")
const client = (global.mod = new Client({ intents:32767 }))
const base = require("../../settings/settings.json")
const moment = require("moment")
require("moment-duration-format")
client.login(base.MODERATION).catch(() => console.error(`[MODERATION ERROR]: Token hatalı/bulunmuyor. Lütfen tokenini düzelt!`))
client.on("ready", async() => {
    const play = Math.floor(Math.random() * (base.ready.length))
    setInterval(() => {
        client.user.setPresence({ activities:[{ name:`${base.ready[play]}` }], status:base.status })
    }, 10000)
    console.log(`[MODERATION]: ${client.user.tag}`)
})
require("../functions/moderation/commandLoader")
require("../functions/moderation/eventLoader")(client)
mongoose.connect(base.mongoDB, {autoIndex:false})

const Setup = require("../models/Setup")
const Names = require("../models/Names")
const RoleLog = require("../models/RoleLog")
client.on("guildMemberAdd", async member => {
    let db = await Setup.findOne({guild:member.guild.id})
    if(member.user.bot) return
    if(new Date().getMilliseconds() - member.user.createdAt.getMilliseconds() < 86400000*7) {//86400000*dateNumber
        // ceza varsa cezalandıracak + invite/inviter sistemi yapılacak
        client.channels.cache.get(db.welcome).send({content:`${member.guild.name} sunucusuna hoşgeldin ${member}!\n
Hesabını **${moment(member.user.createdAt).format("LLL")}** tarihinde oluşturmuşsun.\n
Seninle birlikte ${member.guild.memberCount} kişiye ulaştık! <#${db.rules}> kanalından kuralları okuduktan sonra ses teyit odalarından birine geçebilirsin.
${db.taglıAlım == true ? `\`\`\`Sunucumuz şu anda taglı alımdadır, tagımızı (${db.tag}) alarak içeriye giriş yapabilirsin.\`\`\`` : ""}`})
    } else {
        member.roles.set([db.supheli]).catch(() => console.log(`[SETUP ERROR]: Şüpheli rolü kurulmadığı için bir kullanıcıya rol veremedim!`))
        client.channels.cache.get(db.welcome).send({content:`${member.guild.emojis.cache.find(x => x.name == "mavera_no")} ${member} üyesinin hesabı 7 günden önce oluşturulduğu için şüpheliye alındı.`})
    }
})
client.on("guildMemberRemove", async member => {
    // invite sistemi
    let db = await Setup.findOne({guild:member.guild.id})
    await Names.findOneAndUpdate({uye:member.id},{$push:{isimler:`\`${member.displayName}\` (Sunucudan Ayrılma)`}},{upsert:true})
    client.channels.cache.find(x => x.name == "join_left_log").send({content:`${member.guild.emojis.cache.find(x=> x.name == "mavera_no")} ${member} (${member.user.tag} - ${member.id}) sunucudan çıkış yaptı.
• Ayrılmasıyla beraber **${member.guild.memberCount}** kişi kaldık.
    `})
})
