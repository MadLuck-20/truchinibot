let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} Ahora está AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
