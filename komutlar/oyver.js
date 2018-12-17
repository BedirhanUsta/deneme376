const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `Bota oy vermek için: https://abc.gen.tr/botoyla`);
  if (message.channel.type !== 'channel') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Oy vermek için linki özel mesaj olarak gönderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {

  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Bota oy verme linkini gösterir',
  usage: 'oyver'
};
