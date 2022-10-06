let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw "Where text"
  await conn.setStatus(text ? text : "null").then(_ => m.reply("Success Changed Status"))
}
  handler.help = ['setstatus <text>']
handler.tags = ['owner']
handler.command = /^setstatus/i

handler.rowner, handler.mods = true

export default handler 
