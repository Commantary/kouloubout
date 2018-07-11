const pokemon = require('pokemon');

module.exports.run = async (client, message, args) => {

	if (args[0] == undefined){
		return message.channel.send("Il faut préciser un nom de pokémon !");
	}

	var pokemonName = args[0].substr(0, 1).toUpperCase() + "" + args[0].substr(1).toLowerCase()

	if (pokemon.getId(pokemonName, "fr") === -1){
		return message.channel.send("Ce nom de pokémon n'existe pas !");
	}

		var pokemonId = pokemon.getId(pokemonName, "fr");

		console.log("server: " + message.guild.name + " | channel: " + message.channel.name + " | author: " + message.author.username + " | getId: " + pokemon.getId(pokemonName, "fr") + " | getName: " + pokemon.getName(pokemonId))

		return message.channel.send("La traduction du pokémon **" + pokemonName + "** est **" + pokemon.getName(pokemonId) + "**");

} // FIN DU MODULE EXPORTS