const base = require("../../../settings/settings.json")
exports.run = async(client, msg, args, yes, no, embed, uye) => {
    if(!base.developers.includes(msg.author.id)) return
    if(!args[0]) return msg.reply({content:`Yüklenecek emoji ismi ve linkini belirt. \`${base.prefixes.moderation}emoji <isim> <url>\``})
    if(!args[1]) return msg.reply({content:`Emoji URL'sini belirt.`})
    await msg.guild.emojis.create(args[1], args[0]).then(() => msg.react(yes)).catch(() => msg.reply({content:`Emojiyi yüklerken bir sorun meydana geldi. URL bozuk veya yetkim bulunmuyor.`}))
}
exports.mavera = {
    name:"emoji",
    ek:["emojiyükle", "eyükle", "emojicreate"]
}
