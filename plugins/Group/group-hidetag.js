// Klo mau pake, pake aja ini bkn enc cma terser aja

// Klo mau pake, pake aja ini bkn enc cma terser aja

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { mufar, text, participants }) => {
  let users = participants.map(u => mufar.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = mufar.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }}, { quoted: null, userJid: mufar.user.id }), text || q.text, mufar.user.jid, { mentions: users })
  await mufar.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = handler.alias = ['hidetag']
handler.tags = ['group']
handler.command = /^(hidetag|h)$/i
handler.group = handler.admin = false
handler.owner = false
handler.premium = false
handler.admin = true
export default handler