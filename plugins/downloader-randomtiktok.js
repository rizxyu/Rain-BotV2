const CLIENT_ID = "zZeR6I5DM5NMAYEhk7J9vveMqZzpCIym";
import soundcloud from 'soundcloud-downloader'.default;
import util from 'util';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} link`
soundcloud.download(args[0], CLIENT_ID).then(async (buff) => {
            let hasil = await fetch(buff)
            conn.sendFile(m.chat, hasil, "soundcloud.mp3", null, m)
        })
    }
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(soundcloud)$/i

export default handler

const isUrl = function (url) {
     return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
