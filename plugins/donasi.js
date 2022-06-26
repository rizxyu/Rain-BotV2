let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendHydrated(m.chat, ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa/pulse(Telkomsel):*_ ${pulsa}

_*Dana/ovo:*_ ${dana}
_*Paypal:*_ ${paypal}
_*Saweria:*_ ${saweria}
_*Trakteer:*_ ${trakteer}

`, author, null, `${webs}`, `Website`, null, null, [['Owner', '.owner']], m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
