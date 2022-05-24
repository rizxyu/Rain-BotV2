import { WAProto, generateMessageID } from "@adiwajshing/baileys"

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.quoted
if (!args[0]) throw `example: ${usedPrefix +command} 😎`
if (!who) throw `Tag someone`

const react = new WAProto.ReactionMessage.create({})
        react.key = { remoteJid: m.chat, fromMe: true, id: m.quoted.id, }
        react.text = args[0]
        react.senderTimestampMs = { low: 12345678, high: 0, unsigned: false }
        
         conn.relayMessage(m.chat, { reactionMessage: react }, { messageId: generateMessageID() })
         m.reply(m.quoted.id)
}

handler.help = ['react'].map(v => v + ' <emoji>')
handler.tags = ['Baileys']
handler.command = /^(react|reac|reak)$/i

export default handler
