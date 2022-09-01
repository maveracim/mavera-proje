const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
const Setup = require("../../models/Setup")
const moment = require("moment")
moment.locale("tr")
let client = global.mod
module.exports = async mavera => {
    let db = await Setup.findOne({ guild:mavera.guild.id })
    if(mavera.customId == "çekiliş") {
        if(mavera.member.roles.cache.get(db.çekiliş)) {
            await mavera.member.roles.remove(db.çekiliş)
            mavera.reply({content:`<@&${db.çekiliş}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(db.çekiliş)
            mavera.reply({content:`<@&${db.çekiliş}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.customId == "etkinlik") {
        if(mavera.member.roles.cache.get(db.etkinlik)) {
            await mavera.member.roles.remove(db.etkinlik)
            mavera.reply({content:`<@&${db.etkinlik}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(db.etkinlik)
            mavera.reply({content:`<@&${db.etkinlik}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.customId == "ivar") {
        if(mavera.member.roles.cache.get(db.ivar)) {
            await mavera.member.roles.remove(db.ivar)
            mavera.reply({content:`<@&${db.ivar}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(db.ivar)
            mavera.reply({content:`<@&${db.ivar}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.customId == "iyok") {
        if(mavera.member.roles.cache.get(db.iyok)) {
            await mavera.member.roles.remove(db.iyok)
            mavera.reply({content:`<@&${db.iyok}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(db.iyok)
            mavera.reply({content:`<@&${db.iyok}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "beyaz") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.beyaz).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.beyaz).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.beyaz).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.beyaz).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.beyaz).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "mor") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.mor).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.mor).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.mor).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.mor).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.mor).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "red") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.kırmızı).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.kırmızı).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.kırmızı).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.kırmızı).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.kırmızı).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "orange") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.turuncu).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.turuncu).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.turuncu).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.turuncu).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.turuncu).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "green") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.yeşil).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.yeşil).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.yeşil).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.yeşil).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.yeşil).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "sarı") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.sarı).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.sarı).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.sarı).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.sarı).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.sarı).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.values == "pink") {
        if(mavera.member.roles.cache.get(mavera.guild.roles.cache.find(x => x.name == base.pembe).id)) {
            await mavera.member.roles.remove(mavera.guild.roles.cache.find(x => x.name == base.pembe).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.pembe).id}> rolü üstünüzden alındı.`,ephemeral:true})
        } else {
            await mavera.member.roles.add(mavera.guild.roles.cache.find(x => x.name == base.pembe).id)
            mavera.reply({content:`<@&${mavera.guild.roles.cache.find(x => x.name == base.pembe).id}> rolü üstünüze verildi.`,ephemeral:true})
        }
    }
    if(mavera.customId == "1") {
        mavera.reply({content:`\`${moment(mavera.member.joinedAt).format("D MMMM YYYY")}\` tarihinde sunucuya giriş yapmışsınız.`,ephemeral:true})
    }
    if(mavera.customId == "2") { 
        mavera.reply({ content:`Hesabınızı \`${moment(mavera.member.user.createdAt).format("LLL")}\`tarihinde oluşturmuşsunuz.`, ephemeral:true }) 
    }
    if(mavera.customId == "3") { 
        mavera.reply({ content:`${mavera.member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(" ") ? mavera.member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(", ") : "Üstünüzde rol bulunmuyor." }`, ephemeral:true }) 
    }
    //4,5,6,7 ayarlanacak!
    if(mavera.customId == "8") {
        mavera.reply({ embeds:[new MessageEmbed().setFooter({ text:base.footer }).setTimestamp().setColor("PURPLE")
        .setDescription(`\`•\` Sesli kanallarda **${mavera.guild.members.cache.filter(x => x.voice.channel).size || 0}** kişi bulunuyor.
\`•\` Sunucumuzda toplam **${mavera.guild.members.cache.filter(x => x.user.username.includes(db.tag)).size}** kişi tagımızda bulunuyor.
\`•\` Sunucumuzda toplam **${mavera.guild.memberCount}** kişi bulunuyor.
\`•\` Sunucumuz **${mavera.guild.premiumSubscriptionCount}** takviyeye sahip (**${mavera.guild.premiumTier.replace("NONE", "0").replace("TIER_1", "1").replace("TIER_2", "2").replace("TIER_3", "3")}.** seviye)
`)], ephemeral:true })
    }
}