//Misi json
var misi = [
  {
    "index": 1,
    "rank": "SSS",
    "misii": "Menaklukan Raja Iblis",
    "exp": 97838,
    "healt": 100,
    "stamina": 120,
    "crystal": 37,
    "title": "Penakluk raja iblis",
    "point": 28,
    "gems": 10
  },
  {
    "index": 2,
    "rank": "F",
    "misii": "Mencari Crystal",
    "healt": 0,
    "stamina": 60,
    "exp": 1072,
    "crystal": 3,
    "title": "crystal hunter",
    "point": 0,
    "gems": 0
  },
  {
    "index": 3,
    "rank": "SS+",
    "misii": "Taklukan naga Everest",
    "exp": 79938,
    "healt": 90,
    "stamina": 90,
    "crystal": 24,
    "title": "Sang Penakluk Naga Everest",
    "point": 12,
    "gems": 9
  },
  {
    "index": 4,
    "rank": "B+",
    "misii": "Memusnahkan Desa Goblin",
    "exp": 5647,
    "healt": 40,
    "stamina": 80,
    "crystal": 9,
    "title": "Musuh Para Goblin",
    "point": 3,
    "gems": 1
  },
  {
    "index": 5,
    "rank": "C+",
    "misii": "Menyelesaikan Dungeon Berisi Monster Laba laba",
    "exp": 4837,
    "healt": 74,
    "stamina": 86,
    "crystal": 7,
    "title": "spider monster killer",
    "point": 2,
    "gems": 1
  },
  {
    "index": 6,
    "rank": "A+",
    "misii": "Membuat Ramuan Penyembuh penyakit 50 poison",
    "healt": 2,
    "stamina": 79,
    "exp": 26829,
    "crystal": 15,
    "title": "Alkemis Ramuan Hebat",
    "point": 10,
    "gems": 2
  },
 {
    "index": 7,
    "rank": "E+",
    "misii": "Memungut kristal di dungeon",
    "exp": 3000,
    "healt": 3,
    "stamina": 50,
    "crystal": 5,
    "title": "crystal picker",
    "point": 0
  }
]

async function handler(m, { conn, args, text , usedPrefix, command }) {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(m.sender in conn.mission) return m.reply("Kamu masih melakukan misi, tunggu sampai selesai!!")

  try {
    let json = misi[Math.floor(Math.random() * misi.length)] //get misi
    const cooldown = 5 * (1000 * 60) //coldown timer second
    let user = global.db.data.users[m.sender] //Get db user
    
    if (user.health == 0 || user.stamina == 0 || user.mana == 0) return m.reply(`your stamina/healt/mana is less than 100`)

    if(typeof user.lastmisi != "number") global.db.data.users[m.sender].lastmisi = 0
    if(typeof user.exp != "number") global.db.data.users[m.sender].exp = 0
    if(typeof user.crystal != "number") global.db.data.users[m.sender].crystal = 0

    let timers = (cooldown - (new Date - user.lastmisi))
    if(new Date - user.lastmisi <= cooldown) return m.reply(`wait for *🕐${clockString(timers)}*`)
    if(!user.skill) return m.reply("Anda belum mempunyai skill")

    if(!(m.sender in conn.mission)) {
      conn.mission[m.sender] = {
        sender: m.sender,
        timeout: setTimeout(() => {m.reply('timed out');delete conn.mission[m.sender]}, 60000),
        json
      }
      //Caption
      let caption = `*A MISSION HAS BEEN GIVEN TO THE HUNTER! (BETA)*
*🥇 RANK:* ${json.rank}
*📰 MISI:* ${json.misii}
*🎁 GIFT:* Exp ${json.exp} & Crystal Mana ${json.crystal}
${ json.title ? `*🔖 TITLE:* ${json.title}` : '\n'} ${json.gems ? `Gems: ${json.gems}` : `\n`}

slect option
- Accept
- Cancel
`
      return conn.sendButton(m.chat, caption, author, null, [['Accept','accept'], ['Cancel','cancel']], m) //SendMessage
    }
  } catch (e) {
    console.error(e)
    if(m.sender in conn.mission) {
      let { timeout } = conn.mission[m.sender]
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      m.reply('Rejected')
    }
  }
}

handler.before = async m => {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(!(m.sender in conn.mission)) return
  if(m.isBaileys) return

  let { timeout, json } = conn.mission[m.sender]
  const cooldown = 5 * (1000 * 60) //coldown timer second
  let user = global.db.data.users[m.sender] //Get db user

  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
  if(txt != "accept" && txt != "cancel" && txt != "gas") return

  if(typeof user.lastmisi != "number") global.db.data.users[m.sender].lastmisi = 0
  if(typeof user.exp != "number") global.db.data.users[m.sender].exp = 0
  if(typeof user.crystal != "number") global.db.data.users[m.sender].crystal = 0

  let timers = (cooldown - (new Date - user.lastmisi))
  if(new Date - user.lastmisi <= cooldown) return m.reply(`Wait for *🕐${clockString(timers)}*`)
  if(!user.skill) return m.reply("Anda belum mempunyai skill")

  let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
  let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
  let Aku = (randomaku * 1)
  let Kamu = (randomkamu * 1)
  let aud = ["Mana Habis", "Stamina Habis", "Diserang Monster", "Dibokong Monster"]
  let aui = aud[Math.floor(Math.random() * aud.length)]

  //Gacha systemBeta
  try {
    if(/^accept?$/i.test(txt)) {
      if(Aku > Kamu) {
        var cpt = `Berhasil Menyelesaikan 📰misi ${json.misii}`
        m.reply(`${json.title ? `You got a title ${json.title}`: ""}`)
        m.reply(cpt)
        user.exp += json.exp
        user.crystal += json.crystal
        user.title += json.title
        user.misi += json.misii
      } else if(Aku < Kamu) {
        var flr = `Gagal Menyelesaikan 📰Misi ${json.misii} Dikarenakan ${aui} `
        m.reply(flr)
      } else {
        var cpe = `Berhasil Menyelesaikan 📰misi ${json.misii}`
        m.reply(`${json.title ? `You got a title ${json.title}`: ""}`)
        m.reply(cpe)
        user.exp += json.exp
        user.crystal += json.crystal
        user.title += json.title
        user.misi += json.misii
      }
      user.lastmisi = new Date * 1
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      return !0
    } else if (/^cancel?$/i.test(txt)) {
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      m.reply('Canceled')
      return !0
    }
  } catch (e) {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    //if (moneyDulu > (user.money * 1)) user.money = moneyDulu * 1
    m.reply('Error saat pengambilan misi (Rejected)')
    console.log("\n".repeat(3))
    console.log(e.stack)
    return !0
  } finally {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    return !0
  }
}

handler.help = ['mission']
handler.tags = ['rpg']
handler.command = /^(m(isi)?(ission)?)$/i

export default handler


/**
 * Detect if thats number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}

/**
 * Random pick from Array
 * @param {Array} list
 * @returns Any
 */
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Convert milliseconds to clock string
 * @param {Number} ms
 * @returns String
 */
 function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(":")
}
