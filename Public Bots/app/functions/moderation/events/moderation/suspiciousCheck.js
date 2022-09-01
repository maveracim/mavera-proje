const Setup = require("../../models/Setup")
const moment = require("moment")
moment.locale("tr")
let client = global.mod
module.exports = async mavera => {
    let db = await Setup.findOne({ guild:mavera.guild.id })
    if(!mavera.member.roles.cache.get(db.supheli)) return
    if(mavera.customId == "suspcheck") {
        const check = new Date().getTime() - mavera.member.user.createdAt.getTime()
        if(check < 604800000) {
            mavera.reply({content:`Hesabınız \`${moment.duration(check).format("DD [gün]")} önce\` oluşturulduğu için sunucuya erişim sağlayamazsınız.`,ephemeral:true})
        } else {
            await mavera.member.roles.set([db.unreg]).then(() => {
                mavera.reply({content:`Hesabınız \`${moment.duration(check).format("DD [gün]")} önce\` oluşturulduğu için sunucuya erişiminiz sağlanıyor!`,ephemeral:true})
            }).catch(() => mavera.reply({content:"Kayıtsız rolü kurulmadığı/yetkim yetmediği için kayıtsıza atamadım.",ephemeral:true}))
        }
    }
}