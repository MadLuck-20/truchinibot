let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'No: nodo main.js\nEn: nodo index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Restableciendo el bot...\nPor favor espere al rededor de 1 minuto')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Not working)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

