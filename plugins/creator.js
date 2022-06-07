function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  this.sendButton(m.chat, `CREATOR`, `• Nurutomo (base)\n• BochilGaming\n• FearTeam`, null, [['Menu','.menu']], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
