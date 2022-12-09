let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quién quiere ser desbaneado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a uno de ellos'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `Desbaneado exitosamente`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
