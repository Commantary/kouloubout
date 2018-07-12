const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  function sis(guild){ // FUNCTION POUR SEND LE MESSAGE
    if(guild.channels.find('name','discussion')){
      let chaine = guild.channels.find('name','discussion')
      let argsFalse = message.content.trim().split(/ +/g)
      let argsTrue = message.content.slice(argsFalse[0].length)

      if(message.author.id === '296716897968324609'){
        const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username + '-|- Modérateur', message.author.avatarURL)
      .setColor(12515201)
      .setFooter(message.guild.name, message.guild.iconURL,)
      .setDescription(argsTrue)

      return chaine.send({embed})
      }

      if(message.author.id === '214846601066315776'){
        const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username + '-|- Créateur', message.author.avatarURL)
      .setColor(12515201)
      .setFooter(message.guild.name, message.guild.iconURL,)
      .setDescription(argsTrue)

      return chaine.send({embed})
      }

      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(12515201)
      .setFooter(message.guild.name, message.guild.iconURL,)
      .setDescription(argsTrue)

      chaine.send({embed})
    }
  } // FIN DE LA FONCTION

  if(args[0]==undefined) return message.channel.send({embed: {
    color: 12434877,
    description: 'Vous devez spécifier un message à envoyé !'
  }})

  if(message.guild.channels.exists('name', 'discussion')){
    client.guilds.map(g=>sis(g)) // ON EXECUTE
  } else {

    var comabot = message.guild.roles.find('name', 'kouloubout')

    if(comabot.hasPermission('MANAGE_CHANNELS')){
      message.guild.createChannel('discussion', 'text') // ON CREER LE CHANNEL
    .then(message.channel.send({embed: { // ON ENVOIE LE MESSAGE
      title: 'Info',
      color: 12434877,
      description: 'Le channel `sis` a été créer, réessayer...'
    }})) // FIN DE L'EMBED
    .catch(console.error) // SI IL Y A UNE ERREUR
  } else {
    message.channel.send({embed: { // ON ENVOIE LE MESSAGE
      title: 'Info',
      color: 12434877,
      description: 'Je ne peux pas créer le channel `sis`, créer le pour utilisé la commande `+sis`'
    }})

  }
  }



} // FIN DU MODULE EXPORTS
