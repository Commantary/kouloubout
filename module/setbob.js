const got = require('got')
const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const name_to_number = require('./json/name_to_number_lower.json')

module.exports.run = async (client, message, args) => {

got.get(bdd, {
	json: true,
}).then(data => {
	var body = data.body;

	if (args[0] !== undefined){
		console.log(1)
		if (body[message.author.id] !== undefined){
			capitalize = function(str1){
				return str1.charAt(0).toUpperCase() + str1.slice(1);
			}
			var lowerCaseBob = message.content.substr(8).toLowerCase()
			var caseBob = capitalize(message.content.substr(8))

			console.log(capitalize(message.content.substr(8)))
			if (name_to_number[lowerCaseBob] !== undefined){
				console.log(3)

				body[message.author.id].bob_principale = caseBob
				return message.channel.send({embed: {
					color: 15922601,
					description: "Votre bob principale est maintenant: **" + caseBob + "**"
				}})

			} else {
				return message.channel.send({embed: {
					color: 16406616,
					description: "Le bob spécifier n'existe pas ou n'est pas bien écrit"
				}})
			}

		} else {
			return message.channel.send({embed: {
				color: 16406616,
				description: "Vous n'avez pas de compte bober"
			}})
		}

	} else {
		return message.channel.send({embed: {
			color: 16406616,
			description: "Vous devez spécifier un bob !"
		}})
	}


	got.put(bdd, {
		json: true,
		body: body
	})
}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

} // FIN DU MODULE EXPORTS