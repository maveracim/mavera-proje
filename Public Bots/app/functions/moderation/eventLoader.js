const mavera = (event) => require(`../../events/moderation/${event}`)
module.exports = client => {
  client.on("messageCreate", mavera("commandHandler"))
  client.on("messageCreate", mavera("messageStat"))//şimdilik sadece mesaj ekleme yapıyor
  client.on("messageDelete", mavera("messageDelete"))
  client.on("messageUpdate", mavera("messageUpdate"))
  client.on("interactionCreate", mavera("interactionMenu"))//ilişki, etkinlik/çekiliş ve kullanıcı panel
  client.on("interactionCreate", mavera("suspiciousCheck"))//şüpheli kontrolü
}
