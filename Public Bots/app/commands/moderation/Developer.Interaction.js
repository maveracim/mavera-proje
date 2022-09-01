const { MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js")
exports.run = async(client, msg, args) => {
    if(msg.author.id !== "983409390164000768") return
    if(!args[0]) return msg.reply({ content:"k:kullanıcı\ne:etkinlik\ni:ilişki\nr:renk\nş:şüpheli" })
    if(args[0] == "k") {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("1").setLabel("I").setStyle("SUCCESS"),
            new MessageButton().setCustomId("2").setLabel("II").setStyle("SUCCESS"),
            new MessageButton().setCustomId("3").setLabel("III").setStyle("SUCCESS"))
        const row2 = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("4").setLabel("IV").setStyle("SUCCESS"),
            new MessageButton().setCustomId("5").setLabel("V").setStyle("SUCCESS"),
            new MessageButton().setCustomId("6").setLabel("VI").setStyle("SUCCESS"))
        const row3 = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("7").setLabel("VII").setStyle("SUCCESS"),
            new MessageButton().setCustomId("8").setLabel("VIII").setStyle("SUCCESS"),
            new MessageButton().setCustomId("9").setLabel("IX").setStyle("DANGER"))
        msg.delete()
        msg.channel.send({ content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_star")} Sunucu içi verilerinizi görüntülemek için tıklayın.

\`I:\` Sunucuya giriş tarihinizi öğrenin.
\`II:\` Hesabınızın açılış tarihini öğrenin.
\`III:\` Üzerinizdeki rolleri görüntüleyin.

\`IV:\` Davet bilgilerini öğren.
\`V:\` Kaydolduğunuz isimleri görüntüleyin.
\`VI:\` Mesaj ve ses istatistiklerini görüntüle.

\`VII:\` Yetki durumunuzu öğrenin.
\`VIII:\` Sunucu istatistiklerine eriş.
\`IX:\` Tekrardan sesli kaydolun.`, components:[row,row2,row3] })
    }
    if(args[0] == "e") {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("etkinlik").setLabel("Etkinlik Katılımcısı!").setStyle("SUCCESS").setEmoji("🎁"),
            new MessageButton().setCustomId("çekiliş").setLabel("Çekiliş Katılımcısı!").setStyle("DANGER").setEmoji("🎉"))
        msg.delete()
        msg.channel.send({content:`Sunucumuzdaki etkinlik ve çekilişlerden haberdar olmak için tıklayın!`, components:[row]})
    }
    if(args[0] == "i") {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("ivar").setLabel("İlişkim Var").setStyle("SUCCESS").setEmoji(msg.guild.emojis.cache.find(x => x.name == "mavera_kalp")),
            new MessageButton().setCustomId("iyok").setLabel("İlişkim Yok").setStyle("DANGER").setEmoji(msg.guild.emojis.cache.find(x => x.name == "mavera_moon")))
        msg.delete()
        msg.channel.send({content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_star")} İlişki durumunuzu seçiniz.`, components:[row]})
    }
    if(args[0] == "r") {
        const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId("renk")
        .setPlaceholder("İstediğiniz bir rengi seçin!")
        .addOptions([
            { label:"Beyaz", value:"beyaz", emoji:"⚪" },
            { label:"Mor", value:"mor", emoji:"🟣" },
            { label:"Kırmızı", value:"red", emoji:"🔴" },
            { label:"Turuncu", value:"orange", emoji:"🟠" },
            { label:"Yeşil", value:"green", emoji:"🟢" },
            { label:"Sarı", value:"sarı", emoji:"🟡" },
            { label:"Pembe", value:"pink", emoji:"🟣" },
        ]))
        msg.delete()
        msg.channel.send({content:`${msg.guild.emojis.cache.find(x => x.name == "mavera_star")} İstediğiniz rengi seçiniz.`, components:[row]})
    }
    if(args[0] == "ş" || args[0] == "s") {
        msg.delete()
        const row = new MessageActionRow().addComponents(new MessageButton().setCustomId("suspcheck").setLabel("Hesabını kontrol et.").setStyle("SECONDARY"))
        msg.channel.send({ content:`\`\`\`js
Merhaba ${msg.guild.name},
• Sunucumuz 7 gün içerisinde açılan hesapları kabul etmemektedir.
• Lütfen "Cezalıdan çıkarır mısın", "Şüpheli hesap kaldırır mısın" gibi sorular sormayın.

Eğer hesabınız 7 günden fazla ise butona basarak kayıtsız bölümüne giriş yapabilirsin.\`\`\``,components:[row]})
    }
}
exports.mavera = { name: "interaction", ek:["menü", "menu", "buttons", "button"] }