import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('Nyari apa?')
    let res = await fetch(global.API('https://wall.alphacoders.com/api2.0', '/get.php', {
      auth: '3e7756c85df54b78f934a284c11abe4e',
      method: 'search',
      term: text
    }))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if(json.total_match == 0) return m.reply(`Tidak dapat menemukan \"${text}\"!`)
    let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
    await conn.sendFile(m.chat, img.url_image, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
  }

handler.help = ['wallq <nama>', 'walls <search>']
handler.tags = ['Wallpaper']

handler.command = /^wall(q|(s)?)$/i

export default handler
