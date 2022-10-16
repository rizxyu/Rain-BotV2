import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const groupAdmins = participants.filter(p => p.admin)
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
     db.data.chats[m.chat].isBanned = true
    conn.sendButton(m.chat, 'Done!', "banchat", null, ["Unbanchat", "/unbanchat"], m)
    conn.reply(owner, `Group anda *${groupMetadata.subject}* Telah diban oleh pemilik bot, silahkan chat pemilik bot jika ingin di unban`, m)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.desc = ["Mute grup"]
handler.rowner, handler.mods = true

export default handler
