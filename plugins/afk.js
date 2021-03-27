let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} é agora AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['𝚊𝚏𝚔〘𝚛𝚊𝚣𝚊𝚘〙']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
