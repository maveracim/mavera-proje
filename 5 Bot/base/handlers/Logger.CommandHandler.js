const { Collection } = require("discord.js")
const { readdir } = require("fs")
let client = global.log
client.mavera = new Collection()
client.ek = new Collection()
readdir("./base/commands/logger", (hata, dosya) => {
    if(hata) console.error(hata)
    dosya.forEach(tevfik => {
        let seniseviyorum = require(`../commands/logger/${tevfik}`)
        client.mavera.set(seniseviyorum.mavera.name, seniseviyorum)
        seniseviyorum.mavera.ek.forEach(askim => {
            client.ek.set(askim, seniseviyorum.mavera.name)
        })
    })
})
