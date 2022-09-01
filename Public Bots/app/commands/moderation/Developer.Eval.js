const base = require("../../../settings/settings.json")
exports.run = async(client, msg, args) => {
    if(!base.developers.includes(msg.author.id)) return
    if(!args[0]) return
    let kod = args.join(" ")
    function abc(text) {
        if(typeof text != "string") text = require("util").inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203).replace(/@/g, '@' + String.fromCharCode(8203))) 
        return text
    } try {
        var mav = abc(await eval(kod))
        if(mav.match(new RegExp(`${client.token}`, "g"))) mav.replace(client.token, "mavera derin düşüncelere dalmış gibi..")
        msg.reply({ content:`\`\`\`js
${mav.replace(client.token,"tm")}\`\`\``, split: true })
    } catch(err) { msg.reply({ content:`\`\`\`js
${err}\`\`\``, split: true }) }
}
exports.mavera = { 
    name: "eval", 
    ek:[] 
}