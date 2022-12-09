let handler = async (m, { conn, args }) => {
  throw // Fitur belum jadi :)
  if (!args[0]) throw 'Ok y el link??'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^$/i

module.exports = handler
