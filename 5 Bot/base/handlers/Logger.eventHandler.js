const mavera = (event) => require(`../events/${event}`)
module.exports = client => {
  client.on("messageCreate", mavera("Logger.CommandHandler"))
  //#logs
  client.on("roleCreate", mavera("Logger.RoleCreate"))
}