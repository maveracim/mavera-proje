const base = require("../../../settings/settings.json")
const Stats = require("../../models/Stats")
const ChannelStat = require("../../models/ChannelStat")
module.exports = async msg => {
    if(msg.channel.type == "DM") return
    if(msg.author.bot) return
    await Stats.findOneAndUpdate({ uye:msg.member.id }, { $inc:{ message:1, dailyMessage:1, weekMessage:1, coin:1 } }, {upsert:true})
    await ChannelStat.findOneAndUpdate({ uye:msg.member.id, msgChannel:msg.channel.id }, { $inc:{msgData:1} },{upsert:true})
}