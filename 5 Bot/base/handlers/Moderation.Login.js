const base = require("../../settings/mavera.json")
global.mod.on("ready", () => {
    console.log(`[MODERATION]: ${global.mod.user.tag}`)
    global.mod.user.setPresence({ activities:[{ name:base.ready }], status:"dnd" })
})
global.mod.login(base.tokens.moderation).catch(() => console.error(`[MODERATION]: Token geçersiz veya bulunmuyor! Eğer bu botu kullanmıyorsanız mavera.json dosyasından moderasyon botunun değerini false'ye çevirerek aktif edebilirsiniz.`))
require("./Moderation.eventHandler")(global.mod)
require("./Moderation.CommandLoader")