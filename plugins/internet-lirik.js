import { lyric } from "../lib/scrape.js"

let handler = async(m, { conn, text }) => {
  if(!text) return m.reply("Enter the title or lyrics of the song")
  let result = await lyric(text)
  if(result.status === 404) return m.reply(result.message)
  m.reply(`
*_Lyrics Finder_*

*Song owner*: ${result.creator}
*Song title*: ${result.title}
*Lyrics*:

${result.lyrics}
`)
}

handler.help = ["lirik", "lyrics"].map(v => v + " <judul/lirik>")
handler.tags = ["internet"]

handler.command = /^(l(irik|yric(s)?))$/i

export default handler
