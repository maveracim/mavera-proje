const { MessageEmbed } = require("discord.js")
const base = require("../../../settings/settings.json")
module.exports = msg => {
    let client = msg.client
    if(!msg.content) return
    if(msg.author.bot || msg.channel.type == "dm" || !msg.guild || !msg.author) return
    if(!msg.content.startsWith(base.prefixes.moderation)) return
    let command = msg.content.split(" ")[0].slice(base.prefixes.moderation.length)
    let args = msg.content.split(" ").slice(1)
    let cmd
    let yes = msg.guild.emojis.cache.find(x => x.name == "mavera_yes")
    let no = msg.guild.emojis.cache.find(x => x.name == "mavera_no")
    let uye = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
    let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0])
    let embed = new MessageEmbed().setColor("RANDOM").setFooter({ text:base.footer, iconURL:msg.guild.iconURL({dynamic:true}) }).setTimestamp()
    
    if(client.mavera.has(command)) { 
        cmd = client.mavera.get(command)
    } else if(client.ek.has(command)) {
        cmd = client.mavera.get(client.ek.get(command))
    }

    if(cmd) {
        cmd.run(client, msg, args, yes, no, embed, uye, rol)
        if(client.channels.cache.find(x => x.name == "command_log")) client.channels.cache.find(x => x.name == "command_log").send({ content: `:wastebasket: \`${msg.author.tag}\` üyesi **${command}** komutunu kullandı.` })
    }
}
