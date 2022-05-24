import { aiovideodl, savefrom } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.facebook.com/groups/972938613264044/permalink/1103753026849268/?app=fbl`
const { meta, hd, sd} = await savefrom(args[0]).catch(async _ => await aiovideodl(args[0]))

const done = hd.url || sd.url
 conn.sendFile(m.chat, done, `savefrom.mp4`, ` *🏷️Title:* ${meta.title}
*⌛ durasi:* ${meta.duration}
🔗 *Url:* ${done}`, m)

}
handler.help = ['savefrom'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(save(from)?)$/i

export default handler
