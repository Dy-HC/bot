// Klo mau pake, pake aja ini bkn enc cma terser aja

// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from 'node-fetch'

let handler = async (m, { mufar }) => {
    let res = await fetch(global.API('can', '/api/anime/otakudesu/jadwal'));
    let json = await res.json()
    let teks = ""
     for (const obj of json["scheduleList"]) {
         teks += `Hari: ${obj.day}\n`
         for (const _obj of obj.animeList) {
             teks += `- ${_obj.anime_name}\n`
         }
         teks += "\n\n"
     }
    try {
    await mufar.sendMessage(m.chat, { text: teks }, { quoted: m})
    } catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan atau server sedang mengalami gangguan.`)
	}
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['jadwalotaku']
handler.tags = ['tools']
handler.command = /^(jadwalotaku|otakudesuschedule)$/i
export default handler