const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `Botun davet linki: https://abc.gen.tr/davet` );
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }

}
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['h', 'halp', 'help', 'y'],
permLevel: 0
};

exports.help = {
name: 'davet',
description: 'Botun davet linkini gönderir',
usage: 'davet'
};
