import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
try {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
_Gambar:_ ${json.img}

${json.articles}
`.trim())
} catch (e) {
m.reply("Not found")
 }
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(wiki|wikipedia)$/i

export default handler
