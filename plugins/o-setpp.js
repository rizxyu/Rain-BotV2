import { webp2png } from '../lib/webp2mp4.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
    let sip = await q.download?.()
    await conn.updateProfilePicture(conn.user.jid, sip).then(_ => m.reply('Success update profile picture'))
  } else throw 'Where\'s the media?'
}
handler.alias = ['setpp', 'setppbot']
handler.command = /^setpp(bot)?$/i
handler.rowner, handler.mods = true
export default handler
