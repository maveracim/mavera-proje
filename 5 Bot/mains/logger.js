const { Client } = require("discord.js")
const client = (global.log = new Client({ intents:32767, allowedMentions:{ repliedUser:false } }))
require("../base/handlers/Logger.Login")
