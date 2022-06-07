let handler = async (m, { conn }) => {
    conn.verify = conn.verify ? conn.verify : {}
    let id = m.chat
    if (!(id in conn.verify)) throw "Your session get code is end"
    let json = conn.verify[id][1]
    let ans = json.result
    m.reply('```' + ans + '```')
}
handler.command = /^getcodeid$/i
export default handler
