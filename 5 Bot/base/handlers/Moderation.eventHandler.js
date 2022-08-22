const mavera = (event) => require(`../events/${event}`)
module.exports = client => {
  client.on("messageCreate", mavera("Logger.CommandHandler"))
}