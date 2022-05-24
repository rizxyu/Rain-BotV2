import { tiktok2 } from '../lib/tiktokdl.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `Use example ${usedPrefix}${command}`
    var res = await fetch(`https://zenzapis.xyz/downloader/tiktok?apikey=BagasPrdn&url=${args[0]}`)
    var json = await res.json()
    const done = json.result.nowatermark || json.result.watermark
    if (!done) throw 'Can\'t download video!'
    m.reply(wait)
    conn.sendFile(m.chat, done, '', `*TIKTOK DOWNLOADER*\n\n🔗 *Url:* ${done}\n\n_SUPPORT OWNER DENGAN DONASI_`, m)

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?)$/i

export default handler
