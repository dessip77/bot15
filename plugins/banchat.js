let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('𝚌𝚑𝚊𝚝 𝚋𝚊𝚗𝚒𝚍𝚘!')
  // } else m.reply('Há um número de host aqui...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
