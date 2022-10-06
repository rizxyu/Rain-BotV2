import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import db from '../lib/database.js'

let limit = 500
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 2000 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      if (isNaN(video.fileSize)) continue
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  conn.yta = conn.yta ? conn.yta : {}
  
 switch(args[1]) {
   case "todoc":
     m.reply(wait)
     await conn.sendMessage(m.chat, { document: {url: link}, mimetype: 'video/mpeg', fileName: `${title}.mp4`}, {quoted: m})
    delete conn.yta[m.sender]
     break
   case "tovid":
  m.reply(wait)
  await conn.sendFile(m.chat, link, title + '.mp4', `
*📌Title:* ${title}
*🗎 Filesize:* ${video.fileSizeH}
`.trim(), m, false, {
    asDocument: chat.useDocument
  })
  delete conn.yta[m.sender]
  break
   default: 
   await conn.sendButton(m.chat, `*YOUTUBE VIDEO DL*
*📌Title:* ${title}
*🗎 Filesize:* ${video.fileSizeH}
*${isLimit ? 'Pakai ' : ''}*

Silahkan Tekan salah satu tombol dibawah
Note:
Dokumen - Keberhasilan pengiriman data 99%
Video - Sering bermasalah pd saat mengirim data
`.trim(), author, thumbnail, [["Dokumen", `/ytv ${args[0]} todoc`], ["Video", `/ytv ${args[0]} tovid`]], m)
m.reply(wait)
 }
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.limit = true

export default handler

