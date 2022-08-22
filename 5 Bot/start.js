const mavera = require("./settings/mavera.json")

if(mavera.systems.moderation == true) require("./mains/moderation")
if(mavera.systems.logger == true) require("./mains/logger")
//#Yakında bu botların user token haliyle gelecek.
//#Self guard ve database için https://github.com/Maveracim/Self-Bots projemi inceleyebilirsin!
