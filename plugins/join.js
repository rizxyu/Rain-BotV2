let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, usedPrefix, text, isOwner }) => {
   conn.req = conn.req ? conn.req : {}
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'

    if (isOwner || m.fromMe) {
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ''}`).then(() => {
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
   })
   let caption = `${conn.getName(conn.user.jid)} Adalah Bot whatsapp Yang dibangun dengan NodeJs,Grup Telah Diijinkan oleh @${m.sender.split`@`[0]}. Ketik /menu Untuk melihat daftar fitur\n\n Jangan Spam Bot`
   conn.sendButton(res, caption, author, [['Menu','.menu'], ['Donasi','.donasi']], m, {mentions: conn.parseMention(caption)})
   } else {
   conn.reply( '6282328303332@s.whatsapp.com', `request from ${conn.getName(m.sender)}\n\n${text}`, m)
   m.reply('Sedang di Diperiksa Owner')
   }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['main']

handler.command = /^join$/i
handler.owner = false

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
