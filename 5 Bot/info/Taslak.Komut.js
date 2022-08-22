const base = require("../../../settings/mavera.json")
exports.run = async(client, msg, args, uye) => {
    msg.channel.send({content:"Mesaj gönderimi başarılı!"})
}
exports.mavera = { 
    name: "eval",//komut ismi
    ek:[]//komutun diğer isimleri girilebilir
}
