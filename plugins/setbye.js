let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Adiós establecido con éxito\n@user (Mención)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setbye <text>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

