// Klo mau pake, pake aja ini bkn enc cma terser aja

// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { mufar, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? mufar.user.jid : m.sender
let name = await mufar.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar Dengan Caption .burn'
m.reply('wait')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.xyroinee.xyz/api/maker/burn?url=${url}&apikey=uKa5h3TzNr`)).buffer()
await mufar.sendFile(m.chat, hasil, '', 'Nih Kak, Fotonya Udah Kebakar, Itu Perumpaan Kakak Di Neraka Nanti', m)
}
handler.help = ['burn']
handler.tags = ['tools']
handler.command = /^(burn)$/i
handler.limit = true

export default handler