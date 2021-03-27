let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 All Jadibot Broadcast 」')
    for (let id of chats) conn.copyNForward(id, content)
    conn.reply(m.chat, `_Berhasil mengirim broadcast ke ${users.length} nomor yang jadi bot_`, m)
  } else conn.reply(m.chat, 'Este recurso é apenas para hosts bot',  m)
}
handler.help = ['broadcastjadibot','bcbot'].map(v => v + ' 〘𝚝𝚎𝚡𝚝𝚘〙')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

