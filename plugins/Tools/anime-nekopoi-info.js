// Klo mau pake, pake aja ini bkn enc cma terser aja

// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from 'axios'

let handler = async (m, { mufar, text, usedPrefix: _p }) => {
    if (!text) throw `Id?`
    let res = (await axios.get(API('can', '/api/anime/nekopoi/detail', { id: text } ))).data;
    try {
    let v = res.info_meta
	let arr = []
	let tekss = res.episode.map(v => { return `${v.title}\nUpload : ${v.date || 'unknown'} || Id : ${v.id}`}).filter(v => v).join('\n\n')
	// for (let x of res.episode) arr.push({ title: x.title, description: `Upload : ${x.date || 'unknown'} || Id : ${x.id}`, rowId: `${_p}nekodl ${x.id}` })
	await m.reply(`*Title :* ${res.title}\n*Id :* ${res.id || '-'}\n*Date :* ${res.date ||'-'}\n*Japanese Title :* ${v.aliases || '-'}\n*Score :* ${v.skor || '-'}\n*Produser :* ${v.produser || '-'}\n*Status :* ${v.status || '-'}\n*Total Eps :* ${v.episode || '-'}\n*Durasi :* ${v.durasi || '-'}\n*Release :* ${v.tayang || '-'}\n*Genre :* ${v.genre || '-'}\n\n\n${tekss}`)
	// await mufar.sendMessage(m.chat, { text: `*Title :* ${res.title}\n*Id :* ${res.id || '-'}\n*Date :* ${res.date ||'-'}\n*Japanese Title :* ${v.aliases || '-'}\n*Score :* ${v.skor || '-'}\n*Produser :* ${v.produser || '-'}\n*Status :* ${v.status || '-'}\n*Total Eps :* ${v.episode || '-'}\n*Durasi :* ${v.durasi || '-'}\n*Release :* ${v.tayang || '-'}\n*Genre :* ${v.genre || '-'}`, footer: null, title: null, buttonText: 'Click Here!', sections: [{ title: 'Nekopoi', rows: arr }] }, { quoted: m })
	
	} catch {
	let v = res.stream
	let cap = `*Title :* ${res.title}\n*Id :* ${res.id || '-'}\n*Date :* ${res.date ||'-'}\n*Deskripsi :* ${res.series.content || 'unknown'}\n\n`
  for (let x of v) {
   cap += `*Link :* ${x.link || '-'}
`
cap += '' + '\n'
  	}
     await mufar.sendFile(m.chat, res.image || res.series.image, 'nekopoi.jpg', cap, m)
     
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}}
handler.help = ['nekopoiinfo'].map(v => v + ' <id>')
handler.tags = ['tools']
handler.command = /^(nekoinfo|nekopoiinfo)$/i
export default handler