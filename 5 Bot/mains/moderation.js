const { Client } = require("discord.js")
const client = (global.mod = new Client({ intents:32767, allowedMentions:{ repliedUser:false } }))
require("../base/handlers/Moderation.Login")
