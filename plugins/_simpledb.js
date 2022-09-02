export async function all(m, {conn}) {
  //Just gabut:v
if (m.chat.endsWith('broadcast')) return
this.wow = this.wow ? this.wow : {}
this.wow[m.sender] = {
  text: m.text,
  time: m.messageTimestamp.low * 1000 + (1000*60*60*7),
  chat: m.chat
}
global.simpledb = this.wow
console.log("✴️SAVING SIMPLE DATABASE")
}
