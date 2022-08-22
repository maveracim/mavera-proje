const base = require("../../../settings/mavera.json")
exports.run = async(client, msg, args) => {
    if(msg.author.id !== base.developer) return
    if(!args[0]) return
    let kod = args.join(" ")
    function abc(text) {
        if(typeof text != "string") text = require("util").inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203).replace(/@/g, '@' + String.fromCharCode(8203))) 
        return text
    } try {
        var mav = abc(await eval(kod))
        if(mav.match(new RegExp(`${client.token}`, "g"))) mav.replace(client.token, "FUCK")
        msg.reply({ content:`\`\`\`js\n${mav.replace(client.token,"FUCK")}\`\`\`` })
    } catch(err) { msg.reply({ content:`\`\`\`js\n${err}\`\`\`` }) }
}
exports.mavera = { 
    name: "eval", 
    ek:[] 
}
