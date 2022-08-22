const { MessageEmbed } = require("discord.js")
const base = require("../../settings/mavera.json")
const moment = require("moment")
moment.locale("tr")
let client = global.log//eğer moderasyon için event açtıysanız global.log yerine global.mod olarak değiştirin
const embed = new MessageEmbed().setColor("GOLD").setFooter({text:base.ready}).setTimestamp()
module.exports = async (EVENT_ISMI) => {
    //#işlem
}
