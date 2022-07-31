let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Nama file'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  let dk = await q.download?.()
  if (!/(audio|video|image)/.test(mime)) throw `Balas vn/audio/video/foto yang ingin diubah dengan caption *${usedPrefix + command}*`
  if (!dk) return m.reply("Eror")
  m.reply(wait)
  
  if (/audio/i.test(mime)) {
conn.sendFile(m.chat, dk, text + ".mp3", null, m, null, { asDocument: true})
  } else if (/video/i.test(mime)) {
    conn.sendFile(m.chat, dk, text + ".mp4", null, m, null, { asDocument: true})
  } else if (/image/i.test(mime)) {
conn.sendFile(m.chat, dk, text + ".jpg", null, m, null, { asDocument: true})
  }
}
  
  handler.help = ['todoc', 'todocument'].map(v =>  v + ` <namafile> <reply chat>`)
handler.tags = ['audio']
handler.command = /^to(doc|document)$/i

handler.exp = 0

export default handler
