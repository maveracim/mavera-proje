const base = require("../../../settings/settings.json")
const Notes = require("../../models/Notes")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    let not = await Notes.findOne({uye:msg.member.id})
    if(!not) return msg.reply({content:"Hiç not almamışsınız."})
    msg.reply({embeds:[embed.setDescription(`${yes} ${msg.member}, toplamda **${not.sayi}** kez not aldınız! Aldığınız notlar aşağıda verilmişir.\n\n${not.not.map((x,y) => `(${y+1}.) ${x}`).join("\n───────────────\n")}`)]})
}
exports.mavera = {
    name:"notlarım",
    ek:["notum", "notes"]
}