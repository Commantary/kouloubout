/*
 *
 * @para {Client} client - The discord.js client.
 *
 */

const request = require('request')

module.exports = function (client) {
  // LES VARIABLES

  // QUAND UN MEMBRE REJOINT LE SERVEUR
  client.on('guildMemberAdd', member => {

  var channelId = member.guild.channels.find("name", "arriver-departs");

  channelId.send({embed: {
    color: 65280,
          author: {
            name: 'Nouveaux noob !',
            icon_url: member.user.avatarURL
          },
          thumbnail: {
            url: member.user.avatarURL
          },
          description: "Bienvenue le noob **" + member.user.username + "** !"
  }})

}) // FIN DU GUILDMEMBERADD


  // QUAND UN MEMBRE QUITTE LE SERVEUR
  client.on('guildMemberRemove', member => {

  var channelId = member.guild.channels.find("name", "nouveaux-seigneurs");

  channelId.send({embed: {
    color: 14614785,
          author: {
            name: 'Un noob en moins !',
            icon_url: member.user.avatarURL
          },
          thumbnail: {
            url: member.user.avatarURL
          },
          description: "Au revoir le noob **" + member.user.username + "** !"
  }})

  }) // FIN DE L'EVENT QUILD MEMBER REMOVE

} // FIN DU MODULE
