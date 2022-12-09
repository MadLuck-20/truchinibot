let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Bienvenida establecida con éxito\n@user (mención)\n@subject (Judul Grup)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

