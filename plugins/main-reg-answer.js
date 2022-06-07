let handler = m => m
handler.before = async function (m) {
if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0 
let id = m.sender
if (!m.quoted || !m.quoted.fromMe || !m.text || !/^VERIFY ALERT/i.test(m.quoted.text)) return !0
   this.verify = this.verify ? this.verify : {}
    if (!(id in this.verify)) return this.reply(m.chat, 'Sesi itu telah berakhir', m)
    if (m.quoted.id == this.verify[id][0].id) {
        let verify = JSON.parse(JSON.stringify(this.verify[id][1]))
        if (m.text == verify.result) {
            global.db.data.users[m.sender].registered = true
            global.db.data.users[m.sender].name = conn.getName(m.sender)
            global.db.data.users[m.sender].regTime = + new Date
            clearTimeout(this.verify[id][3])
            delete this.verify[id]
            this.reply(id,`Succes Verify!!! check out on profile`, m)
        } else {
            if (--this.verify[id][2] == 0) {
                clearTimeout(this.verify[id][3])
                delete this.verify[id]
                this.reply(id, `*Session has ended*`, m)
            } else m.reply(`*Code Is wrong!* check your code /getcodeid`)
        }
    }
    return !0
}

export default handler
