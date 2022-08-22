const base = require("../../settings/mavera.json")
global.log.on("ready", () => {
    console.log(`[LOGGER]: ${global.log.user.tag}`)
    global.log.user.setPresence({ activities:[{ name:base.ready }], status:"dnd" })
})
global.log.login(base.tokens.logger).catch(() => console.error(`[LOGGER]: Token geçersiz veya bulunmuyor! Eğer bu botu kullanmıyorsanız mavera.json dosyasından log botunun değerini false'ye çevirerek aktif edebilirsiniz.`))
require("./Logger.eventHandler")(global.log)
require("./Logger.CommandLoader")