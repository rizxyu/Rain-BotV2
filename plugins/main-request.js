let handler = async (m, { conn, text, command }) => {
const data = global.owner.filter(([id, isCreator]) => id && isCreator)//to get owner

  if (/^(re(quest)|req)$/.test(command)) {
    if (!text) return m.reply("what do you report?")

  var caption = `*REQUEST|PERMINTAAN*

*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

conn.reply(data.id + "@s.whatsapp.com", caption, m, { mentions: conn.parseMention(caption) })

   } else if (/^(re(port)|bug)$/.test(command)) {
   if (!text) return m.reply("what do you report?")
   
  var caption2 = `*REPORT|LAPORAN*

*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

conn.reply(data.id + "@s.whatsapp.com", caption2, m, { mentions: conn.parseMention(caption2) })
  }
}
handler.help = ['request', 'report'].map(v => v + '[teks]')
handler.tags = ['main']
handler.command = /^(re(quest|port)|req|bug)$/i

export default handler
