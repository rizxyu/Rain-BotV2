import { twitter } from '../lib/scrapes.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://twitter.com/osisksksk`
    const pe = await twitter(args[0])
    const done = pe.HD || pe.SD
    if (!done) throw 'Can\'t download video!'
    conn.sendFile(m.chat, done, '', `*📄Desc:* ${pe.desc}\n🔗 *Url:* ${done}`, m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twitter)$/i
export default handler
