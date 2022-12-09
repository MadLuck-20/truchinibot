let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '+5493873519831', 'El sin talento', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
