const { Collection } = require("discord.js")
const { readdir } = require("fs")
let client = global.mod
client.mavera = new Collection()
client.ek = new Collection()
readdir("./base/commands/moderation", (hata, dosya) => {
    if(hata) console.error(hata)
    dosya.forEach(tevfik => {
        let seniseviyorum = require(`../commands/moderation/${tevfik}`)
        client.mavera.set(seniseviyorum.mavera.name, seniseviyorum)
        seniseviyorum.mavera.ek.forEach(askim => {
            client.ek.set(askim, seniseviyorum.mavera.name)
        })
    })
})