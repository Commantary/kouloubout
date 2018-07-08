const pokemon = require('pokemon');

module.exports.run = async (client, message, args) => {

	if (args[0] == undefined){
		return message.channel.send("Il faut préciser un nom de pokémon !");
	}

	if (pokemon.getId(args[0], "fr") === -1){
		return message.channel.send("Ce nom de pokémon n'existe pas !");
	}

		var pokemonId = pokemon.getId(args[0], "fr");

		console.log("server: " + message.guild.name + " | channel: " + message.channel.name + " | author: " + message.author.username + " | getId: " + pokemon.getId(args[0], "fr") + " | getName: " + pokemon.getName(pokemonId))

		return message.channel.send("La traduction du pokémon **" + args[0] + "** est **" + pokemon.getName(pokemonId) + "**");

} // FIN DU MODULE EXPORTS