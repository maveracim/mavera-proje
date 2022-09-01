const Notes = require("../../models/Notes")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let yasaklı = ["dc.gg", "dc.gg/", "discord.gg/", "discord.gg", ".com", ".net", ".xyz", ".edu"]
    if(!args[0]) return msg.reply({content:"Bir argüman belirt. (ekle/sil)"})
    if(["ekle", "add", "al"].some(x => x == args[0])) {
        const coklu = args.slice(2).join(" ")
        if(!args[1]) return msg.reply({content:"Alacağınız notun başlığını ve notu girin. (Başlığı notunuzu silerken kullanabilirsiniz.)"})
        let check = await Notes.findOne({uye:msg.member.id})
        if(!check) {
            if(!msg.member.permissions.has(8n) && yasaklı.some(x => args[2].includes(x))) return msg.reply({content:"Yasaklı kelimeleri kullanamazsın."})
            if(!coklu) return msg.reply({content:"Alacağınız notu girin."})
            if(!msg.member.permissions.has(8n) && yasaklı.some(x => coklu.includes(x))) return msg.reply({content:"Yasaklı kelimeleri kullanamazsın."})
            await Notes.findOneAndUpdate({uye:msg.member.id},{$push:{not:`Başlık: \`${args[1]}\`\n\`${coklu}\``},$inc:{sayi:1}},{upsert:true})
            let not = await Notes.findOne({uye:msg.member.id})
            msg.reply({embeds:[embed.setDescription(`${yes} ${msg.member}, toplamda **${not.sayi}** kez not aldınız! Aldığınız en sonki not:\n\`\`\`${coklu}\`\`\``)]})
        } else {
            if(check.baslik == args[2]) return msg.reply({content:"Bu başlıkta bir not açmışsınız."})
            if(!msg.member.permissions.has(8n) && yasaklı.some(x => args[1].includes(x))) return msg.reply({content:"Yasaklı kelimeleri kullanamazsın."})
            if(!coklu) return msg.reply({content:"Alacağınız notu girin."})
            if(!msg.member.permissions.has(8n) && yasaklı.some(x => coklu.includes(x))) return msg.reply({content:"Yasaklı kelimeleri kullanamazsın."})
            await Notes.findOneAndUpdate({uye:msg.member.id},{$push:{not:`Başlık: \`${args[1]}\`\n\`${coklu}\``},$inc:{sayi:1}},{upsert:true})
            let not = await Notes.findOne({uye:msg.member.id})
            msg.reply({embeds:[embed.setDescription(`${yes} ${msg.member}, toplamda **${not.sayi}** kez not aldınız! Aldığınız en sonki not:\n\`\`\`${coklu}\`\`\``)]})
        }
    }
}
exports.mavera = {
    name:"not",
    ek:["notal", "note", "notsil"]
}