
import db from "../lib/database.js";
import axios from "axios"
import cheerio from "cheerio"
import FormData from "form-data"
import instagramGetUrl from 'instagram-url-direct'

//Auto respon other
export async function all(m, { isPrems, isOwner}) {
    
    let setting = db.data.settings[this.user.jid]
    let user = db.data.users[m.sender]
    let chat
    //AUTO SET STATUS
   let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    this.setStatus(`Ketik /help untuk melihat list fitur | Bot Aktif Selama: ${uptime}   | 🪀Whatsapp aktif: ${muptime} - IG: rizxyux`)
    //GC INVIT
    if ((m.mtype === 'groupInvitem.senderssage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
      if (isOwner && isPrems ) {
        let res = await conn.groupAcceptInvite(m.text)
        chat = db.data.chats[m.res]
        chat.expired += +new Date() + 7 * 1000 * 60 * 60 * 24
         let caption = `${conn.getName(conn.user.jid)} Adalah Bot whatsapp Yang dibangun dengan NodeJs, Grup Telah Diijinkan oleh @${m.sender.split("@")[0]}${expired ? " selama " + expired + " hari" : ""}. Ketik /menu Untuk melihat daftar fitur\nJangan lupa upgrade ke premium untuk mengakses semua fitur tanpa batas!\n\n*Note:* _Jangan Spam Bot_`
        this.sendButton(res, caption, author, [["Menu",".menu"]], m, { mentions: this.parseMention(caption) })
      } else {
    this.reply(m.chat,"```Auto Responder```" + "\n" + "Ketik *.join linkgrup* - untuk permintaan masukan bot kedalam grup yg diminta atau hubungi developer",m)
      }
    }
    /**
     * 
     * Doc Buat Fake reply
     * 
    **/
    global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocum.sendernt.presentationml.presentation", "application/msword", "application/pdf"])
		
		/**
		 *
		 * 
		 * Module
		 * 
		**/
		global.nowS = "Season 3 🎃- Hellowen 9 Sep s/d 9 November"
    global.fetch = (await import('node-fetch')).default
    global.skrep = (await import("@bochilteam/scraper"));
    global.skrep2 = ( await import('../lib/scrape.js'))
    global.axios = axios
    global.cheerio = cheerio
    global.foda = FormData
    global.canva = ( await import("canvacord")).default
    global.fs = (await import("fs")).promises
    global.fsd = (await import("fs")).default
     global.user = db.data.users[m.sender]
     global.changelog = `*V3.8.6.09 (STABIL) - 7 Oktober 9:54 Am*
     Penambahan Film Bioskop Now
     Penambahan Zippyshare
     Penambahan Berita Merdeka
     Penambahan fitur searching Happymod
     Penambahan Fitur Ocr image to text
     Penambahan SendPoll
     Fix Eror Togif dan penambahan Tovideo
     Penambahan Ramalan Jodoh
     Penambahan set status khusus pemilik
     Fix Eror Tiktok (Memakai limit)
     Penambahan Savefrom (Memakai limit)`
    // global.m.chat = m.chat
    // global.zyz = m.chat
    global.bendera = ("🇦🇨🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇶🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇱🇧🇲🇧🇳🇧🇴🇧🇶🇧🇷🇧🇸🇧🇹🇧🇻🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇵🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇳🇭🇷🇭🇹🇭🇺🇮🇨🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇫🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇶🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇨🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇲🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇪🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇨🇸🇩🇸🇪🇸🇬🇸🇭🇸🇮🇸🇯🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇦🇹🇨🇹🇩🇹🇫🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇲🇺🇳🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇫🇼🇸🇽🇰🇾🇹🇿🇦🇿🇲🇿🇼🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿")
    
     global.db = ( await import("../lib/database.js"))
     global.wrong = "*Salah*"
     global.fact = "*Benar*"
     global.eror = "Terjadi Kegagalan fatal pada kode"
     global.wait = "Sedang diproses... Tunggu beberapa *Menit* atau *Detik*"
     global.
     global.fail = "Gagal Mendapatkan data
     global.cpt = ""//Mempermudanh
     global.beta = "FITUR INI MASIH DALAM PENGEMBANGAN, JIKA ADA EROR HUBUNGI DEVELOPER BOT"
     
    
        
}




  
      

  







function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
