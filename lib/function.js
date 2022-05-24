import fetch from 'node-fetch'
import axios from 'axios'
import spin from 'spinnies'
import Crypto from 'crypto'

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if (tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async(url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
    admins = []
    for (let i of participants) {
        i.isAdmin ? admins.push(i.jid) : ''
    }
    return admins
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = {
    "interval": 120,
    "frames": [
        "🕐",
        "🕑",
        "🕒",
        "🕓",
        "🕔",
        "🕕",
        "🕖",
        "🕗",
        "🕘",
        "🕙",
        "🕚",
        "🕛"
    ]
}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins });
    return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
    spins.add(id, { text: text })
}
const info = (id, text) => {
    spins.update(id, { text: text })
}
const success = (id, text) => {
    spins.succeed(id, { text: text })

}

const close = (id, text) => {
    spins.fail(id, { text: text })
}


const clockString = (ms) => {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(":")
}


function randomSelect(...arr) {
	if(!arr || arr.length === 0) throw new Error("Array / Text ?");
	if(typeof arr[0] === "object") arr = arr[0];
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomPass(length, opts = {}) {
	let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let lower = "abcdefghijklmnopqrstuvwxyz"
	let num = "0123456789"
	let spc = "@#$_&-?!"

	let all = ""
	if(opts.upper) all += upper
	if(opts.lower) all += lower
	if(opts.num) all += num
	if(opts.spc) all += spc
	if(!all || all.length <= 0 || !all[0]) all = upper + lower

	let result = ""
	for(let i = 1; i <= length; i++) result += all[Math.floor(Math.random() * all.length)]

	return result
}

function randomUID(length = 5) {
	let r = "0123456789";
	let out = "";
	for(let i = 1; i <= length; i++) {
		out += r[Math.floor(Math.random() * r.length)];
	};
	if(length <= 0) return randomUID(5);
	return out;
}

function randomPh() {
	let awal = ["857", "823", "831"];
	let n = ["8341", "5245", "4137"];
	let n2 = ["7029", "9384", "4917"];
	let outN = `${randomSelect(awal)}-${randomSelect(n)}-${randomSelect(n2)}`
	let out = `0${outN.split("-").join("")}\n+62 ${outN}\nhttps://wa.me/62${outN.split("-").join("")}`;
	return out;
}

function isString(text) {
	return typeof(text) == "string";
}

function isNotString(text) {
	return typeof(text) != "string";
}

function isNotNumber(n) {
	return typeof(n) != "number";
}

function isNumber(n) {
	return typeof(n) == "number";
}

function wame(n, text) {
	if(n == undefined) return !1
	let phone = n.split("+").join("").split(" ").join("").split("-").join("");
	phone = phone.startsWith("08") ? phone.replace("08", "62") : phone;
	let url = text != undefined ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : `https://wa.me/${phone}`;
	return url;
}

function find(word, on, result = false) {
	if(result) return (on || "").substr((on || "").indexOf((word || "")));
	if(!result) return (on || "").indexOf((word || ""));
}

function isEven(num) {
	return isNaN(num) ? "Error" : num % 2 === 0;
}

function isOdd(num) {
	return isNaN(num) ? "Error" : num % 2 === 1;
}

function getAge(ttl) {
	let [th, bl, tg] = ttl.split("-");
	let [thn, bln, tgl] = [new Date().getFullYear(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][new Date(). getMonth()], new Date().getDate()];
	
	return bln >= bl && tgl >= tg ? thn - th : bl < bln ? thn - th : thn - th - 1
}

function parseRegex(...args) {
	let tmp = "";
	for(let string of args) {
		if(string != args[args.length - 1]) {
			tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&') + "|";
		} else {
			tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); // |
		}
	}
	return tmp;
}

function genHTML(wn = "(Name)", js, css, cnt) {
	let out = "";
		out += "<!DOCTYPE html>" +
		"\n<html>" +
		"\n  <head>" +
		(js ? "\n    <script src=\"" + js + "\"></script>" : "") +
		(css ? "\n    <link rel=\"stylesheet\" href=\"" + css + "\">" : "") +
		"\n    <title>" + wn + "</title>" +
		"\n  </head>" +
		"\n  <body>" +
		"\n    <h1>" + wn + "</h1>" +
		"\n    <hr>" +
		(cnt ? "\n    " + (cnt.split(`
`).join("\n    ")) : "") +
		"\n  </body>" +
		"\n</html>";
	return out;
}

class Kerang {
	constructor() {
		this.apakah = function(text) {
			let jawaban = ["Iya", "Tidak", "Mungkin", "Mungkin Iya", "Mungkin Tidak", "Coba Tanya Lagi"][Math.floor(Math.random() * 6)];
			return jawaban;
		};
		this.kapankah = function(text) {
			let jawaban = ["Besok", "2 Hari Lagi", "10 Hari Lagi", "Tahun depan", new Date().getFullYear() + 3, new Date().getFullYear() + 5, new Date().getFullYear() + 2][Math.floor(Math.random() * 7)];
			return jawaban;
		}
	}
}

function hk(digit = 4) {
	digit = digit * 1; // Number(digit)
	if(digit <= 0) return hk(digit + 2);
	if(digit != 2 && digit != 4 && digit != 6) return hk(digit - 1);
	let out = String(Math.floor(Math.random() * (digit === 2 ? 99 : digit === 4 ? 9999 : digit === 6 ? 999999 : 0)));
	return !((out.length != 2) && (out.length != 4) && (out.length != 6)) ? out : hk(digit);
}

function chck(code) {
	code = (code || ";").split(`
`);
	let ignore = [";", "{", "}", "[", "", "(", ")", "\`"];
	let line = 0;
	for(let i of code) {
		line += 1;
		if(!ignore.includes(i.substr(i.length - 1))) {
			return "Error in line " + line + " " + i.length + " :\n" + i + "\n\n Please put \";\" in that code";
		}
	}
	return "Nothing";
}

const upperFirst = function(str) {
  return str[0].toUpperCase() + str.replace(str[0], "")
}

export default { getBuffer, h2k, generateMessageID, getGroupAdmins, randomBytes, getRandom, start, info, success, close, parseRegex, clockString, randomSelect, randomPass, randomUID, randomPh, isString, isNotString, isNumber, isNotNumber, wame, find, isEven, isOdd, getAge, parseRegex, genHTML, kerang: new Kerang(), hk, chck, upperFirst }
