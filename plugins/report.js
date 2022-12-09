// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Por favor ingrese un informe', m)
    if (text > 300) return conn.reply(m.chat, 'Lo siento, el texto es demasiado largo, máximo 300 digitos!', m)
    var nomor = m.sender
    const laporan = `*「 REPORT 」*\nNúmero : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    conn.reply(m.chat, '✔️el ploblema se informó al propietario del bot, no se respondera a los informes falsos', m)
}
handler.help = ['bug', 'report'].map(v => v + ' <report>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
