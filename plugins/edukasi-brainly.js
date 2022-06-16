import { Brainly } from "brainly-scraper-v2"
const brainly = new Brainly("id")

let handler = async function(m, { text, usedPrefix, command }) {
  if(!text) return m.reply(`uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`)
  brainly.search(text, "id").then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = json.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*JAWABAN KE ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, "").replace(/<br ?(\/|\\)?>/g, "\n")}`).join("\n")}`).join("\n\n•------------•\n\n")
    m.reply(answer || "Jawaban tidak ditemukan!")
  })
}
handler.help = ["brainly <soal>"]
handler.tags = ["edukasi"]
handler.command = /^brainly$/i
export default handler
