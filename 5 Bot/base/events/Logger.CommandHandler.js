const base = require("../../settings/mavera.json")
module.exports = msg => {
    let client = msg.client
    if(!msg.content) return
    if(msg.author.bot || msg.channel.type == "dm" || !msg.guild || !msg.author) return
    if(!msg.content.startsWith(base.prefix.logger)) return
    let command = msg.content.split(" ")[0].slice(base.prefix.logger.length)
    let args = msg.content.split(" ").slice(1)
    let cmd
    let uye = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])

    if(client.mavera.has(command)) { 
        cmd = client.mavera.get(command)
    } else if(client.ek.has(command)) {
        cmd = client.mavera.get(client.ek.get(command))
    }

    if(cmd) { 
        cmd.run(client, msg, args, uye) 
        if(client.channels.cache.find(x => x.name == "command_log")) client.channels.cache.find(x => x.name == "command_log").send({ content: `:wastebasket: \`${msg.author.tag}\` üyesi **${command}** komutunu kullandı.` })
    }
}
