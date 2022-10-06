import { youtubeSearch } from '@bochilteam/scraper'
import canva from "canvacord"

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  conn.yta = conn.yta ? conn.yta : {}
  if (conn.yta[m.sender])  return conn.sendButton(m.chat, "Selesaikan Unduhan Sebelumnya", "sesi", null, ["Hapus Sesi", "/yta 0 batal"], null)
  
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

let spo = new canva.Spotify()
        .setAuthor(`Rizky`)
        .setAlbum("Play")
        .setStartTimestamp(Date.now() - 10000)
        .setEndTimestamp(Date.now() + 50000)
        .setImage(thumbnail)
        .setTitle(title);
        
   spo.build()
        .then(data => {
   conn.sendHydrated(m.chat, `*PLAY DOWNLOADER*
   
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

Dukung Kami
${saweria}  `.trim(), author, data, url, '📺Go To Youtube!', null, null, [
    ['Audio 🎧', `${usedPrefix}yta ${url}`],
    ['Video 🎥', `${usedPrefix}ytv ${url} yes`],
    ['Batalkan', `${usedPrefix}yta ${url} batal`]
  ], m, { viewOnce: true})
        });
        m.reply("Mencari Judul lagu tersebut....")
        conn.yta[m.sender] = {
          count: 1,
          status: true,
          reqUrl: text
        }
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

