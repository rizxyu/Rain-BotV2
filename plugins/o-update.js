Import { execSync } from 'child_process'

let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/carlxjoe/Rain-BotV2.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update$/i

handler.owner = true

export default handler