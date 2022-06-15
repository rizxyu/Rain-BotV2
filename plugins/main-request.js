let handler = async (m, { conn, text, command }) => {
const data = { id: '6282328303332'}
const coy = `@${m.sender.split("@")[0]} Your Req/Report It has been sent`
  if (/^(re(quest)|req)$/.test(command)) {
    if (!text) return m.reply("what do you report?")
    conn.reply(m.chat, coy, m, { mentions: conn.parseMention(coy)})
  var caption = `*REQUEST|PERMINTAAN*

*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

conn.reply(data.id + "@s.whatsapp.net", caption, m, { mentions: conn.parseMention(caption) })

   } else if (/^(re(port)|bug)$/.test(command)) {
   if (!text) return m.reply("what do you report?")
     conn.reply(m.chat, coy, m, { mentions: conn.parseMention(coy)})
  var caption2 = `*REPORT|LAPORAN*

*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

conn.reply(data.id + "@s.whatsapp.net", caption2, m, { mentions: conn.parseMention(caption2) })
  }
}
handler.help = ['request', 'report'].map(v => v + '[teks]')
handler.tags = ['main']
handler.command = /^(re(quest|port)|req|bug)$/i

export default handler
