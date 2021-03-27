let handler = async m => m.reply(`
╭─「 DONATION 」
│ • ＶＩＮＩＭＯＤＳ [5514997239463]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
