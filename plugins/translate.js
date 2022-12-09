const translate = require('translate-google-api')

// made with love, by Ariffb
// wa.me/6283128734012
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `Ejemplo: \n\n${usedPrefix}tr id|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/languages`

    let [to, trans] = text.split`|`

    if (!to) return conn.reply(m.chat, `Porfavor ingrese el parametro a\n Ejemplo: \n\n${usedPrefix}tr id|thankyou`, m)
    if (!trans) return conn.reply(m.chat, `Porfavor ingrese el texto del parametro\n Ejemplo: \n\n${usedPrefix}tr id|thankyou`, m)

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(m.chat, `${text}\n\nTraducir: ` + result[0])
    } catch (e) {
        m.reply('_Error!_')
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<text>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

