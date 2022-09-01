exports.run = async(client, msg, args, yes, no, embed, uye) => {
    if(uye) {
        msg.reply({content:`${uye.displayAvatarURL({dynamic:true,size:4096})}`})
    } else { msg.reply({content:`${msg.member.displayAvatarURL({dynamic:true,size:4096})}`}) }
}
exports.mavera = { 
    name:"avatar", 
    ek:["av"]
}