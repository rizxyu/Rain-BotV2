import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || ''
    if (!/webp/g.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let media = await q.download?.()
    let out = Buffer.alloc(0)
    if (/webp/g.test(mime)) {
        out = await webp2mp4(media)
    }
    conn.sendFile(m.chat, out, 'out.gif', m, false, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}

handler.help = ['togif (reply media)', 'tovideo <reply>']
handler.tags = ['sticker']
handler.command = /^(togif|tovideo)$/i

export default handler
