import { WAMessageStubType } from '@adiwajshing/baileys'
import db from "../lib/database.js"

export async function all(m, chatUpdate) {
    let chat = db.data.chats[chatUpdate.jid]
  //  if (!db.data.settings[this.user.jid].buggc) return
    switch (m.messageStubType) {
      case WAMessageStubType.CHANGE_EPHEMERAL_SETTING:
        if (chat.detect)
          this.sendMessage(chatUpdate.jid, +m.messageStubParameters[0] ?
            'Pesan Sementara ON' :
            'Pesan Sementara OFF'
            , 'extendedTextMessage')
        break
    }
    switch (m.mtype) {
      case 'protocolMessage':
        switch (m.msg.type) {
          case 3:
            if (m.isGroup) {
              let log = {
                key: m.key,
                content: m.msg,
                sender: m.sender
              }
              this.sendMessage(m.chat, ('*BUG GRUP TERDETEKSI, JANGAN SCROLL KEATAS! HAPUS CHAT INI BIAR GA EROR!!!*\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
              // this.modifyChat(m.chat, 'clear', {
              //     includeStarred: false
              // }).catch(console.error)
              this.reply(global.owner[0] + '@s.whatsapp.net', `
Pelaku pengirim bug gc @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
            }
            break
        }
        break
    }
  }
