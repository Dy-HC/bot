// Klo mau pake, pake aja ini bkn enc cma terser aja

// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from 'node-fetch'
let handler = async(m, { mufar, text }) => {
  let res = await fetch(`https://ll--lasdanon.repl.co/api/anime/doujin-latest?apikey=${global.mupar}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Chapter:* ${v.chapter}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  mufar.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
}
handler.help = ['doujinlatest']
handler.tags = ['anime']
handler.command = /^(doujinlatest)$/i
handler.limit = true
export default handler